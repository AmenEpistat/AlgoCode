import { IUserProgress, UserProgress } from '../models/user-stats-model';
import { Achievement, IAchievement } from '../models/achievement-model';
import { TaskProgress } from '../models/task-progress-model';

class AchievementService {
    async getNewlyEarned(stats: IUserProgress): Promise<IAchievement[]> {
        const alreadyEarnedIds = stats.achievements.map((a) =>
            a.achievementId.toString()
        );

        const candidates = await Achievement.find({
            _id: { $nin: alreadyEarnedIds },
        });
        if (candidates.length === 0) return [];

        const completedTasksCount = await this.getTaskCountIfNeeded(
            candidates,
            stats.userId
        );

        const newlyEarned = candidates.filter((ach) =>
            this.checkCondition(ach, stats, completedTasksCount)
        );

        this.applyAchievements(stats, newlyEarned);

        return newlyEarned;
    }

    private async getTaskCountIfNeeded(
        candidates: IAchievement[],
        userId: any
    ): Promise<number> {
        const hasTaskReq = candidates.some(
            (a) => a.requirementType === 'total_tasks'
        );
        return hasTaskReq
            ? await TaskProgress.countDocuments({ userId, status: 'completed' })
            : 0;
    }

    private checkCondition(
        ach: IAchievement,
        stats: IUserProgress,
        taskCount: number
    ): boolean {
        const conditions: Record<string, boolean> = {
            total_xp: stats.stats.totalXP >= ach.condition,
            streak: stats.stats.currentStreak >= ach.condition,
            total_tasks: taskCount >= ach.condition,
        };
        return conditions[ach.requirementType] || false;
    }

    private applyAchievements(stats: IUserProgress, earned: IAchievement[]) {
        earned.forEach((ach) => {
            stats.achievements.push({
                achievementId: ach._id as any,
                earnedAt: new Date(),
            });
        });
    }

    async getAll(userId: string) {
        const [all, stats] = await Promise.all([
            Achievement.find().lean(),
            UserProgress.findOne({ userId }).select('achievements').lean(),
        ]);

        if (!stats)
            return all.map((ach) => ({
                ...ach,
                earned: false,
                earnedAt: null,
            }));

        const earnedMap = new Map(
            stats.achievements.map((a: any) => [
                a.achievementId.toString(),
                a.earnedAt,
            ])
        );

        return all.map((ach) => ({
            ...ach,
            earned: earnedMap.has(ach._id.toString()),
            earnedAt: earnedMap.get(ach._id.toString()) || null,
        }));
    }
}

export default new AchievementService();
