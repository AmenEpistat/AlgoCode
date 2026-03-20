import mongoose from 'mongoose';
import { ActivityLog } from '../models/activity-log-model';
import { TaskProgress } from '../models/task-progress-model';
import { Task } from '../models/task-model';
import { UserStats } from '../models/user-stats-model';
import ApiError from '../exceptions/api-error';
import StreakService from './streak-service';
import AchievementService from './achievement-service';

class ProgressService {
    async completeTask(userId: string, taskId: string) {
        const existingProgress = await TaskProgress.findOne({ userId, taskId });
        if (existingProgress?.status === 'completed') return;

        let [task, userStats] = await Promise.all([
            Task.findById(taskId),
            UserStats.findOne({ userId }),
        ]);
        if (!task) throw new ApiError(400, 'Задание не найдено');
        if (!userStats)
            throw new ApiError(400, 'Не найдена статитсткиа пользваоеля');

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        userStats.stats.currentStreak = StreakService.calculate(
            userStats.stats,
            today
        );
        userStats.stats.totalXP += task.rewardXP;
        userStats.stats.lastActivityDate = today;
        userStats.stats.level = Math.floor(userStats.stats.totalXP / 1000) + 1;

        const newAchievements =
            await AchievementService.getNewlyEarned(userStats);

        const logs = this.buildLogs(userId, today, task);

        await this.persist(userId, taskId, task, userStats, logs);

        return {
            stats: userStats.stats,
            newAchievements,
            earnedXP: task.rewardXP,
        };
    }

    private buildLogs(userId: string, today: Date, task: any) {
        return [
            {
                userId,
                date: today,
                relatedId: task._id,
                description: `${task.title}`,
            },
        ];
    }

    private async persist(
        userId: string,
        taskId: string,
        task: any,
        stats: any,
        logs: any[]
    ) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await TaskProgress.findOneAndUpdate(
                { userId, taskId },
                {
                    status: 'completed',
                    score: task.rewardXP,
                    moduleId: task.moduleId,
                    completedAt: new Date(),
                },
                { upsert: true, session }
            );
            await stats.save({ session });
            await ActivityLog.insertMany(logs, { session });
            await session.commitTransaction();
        } catch (e) {
            await session.abortTransaction();
            throw e;
        } finally {
            session.endSession();
        }
    }
}

export default new ProgressService();
