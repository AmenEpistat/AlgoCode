import { ActivityLog } from '../models/activity-log-model';
import ApiError from '../exceptions/api-error';

class ActivityService {
    async getCalendarData(userId: string) {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        if (!userId) throw new ApiError(400, 'Нет пользователя');

        return ActivityLog.aggregate([
            { $match: { userId, date: { $gte: oneYearAgo } } },
            { $group: { _id: '$date', count: { $sum: 1 } } },
            { $sort: { _id: 1 } },
            {
                $project: {
                    _id: 0,
                    date: {
                        $dateToString: { format: '%Y-%m-%d', date: '$_id' },
                    },
                    count: 1,
                },
            },
        ]);
    }

    async getDayEvents(userId: string, date: string) {
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 1);

        if (!userId) throw new ApiError(400, 'Нет пользователя');

        const logs = await ActivityLog.find({
            userId,
            date: { $gte: start, $lt: end },
        }).sort({ date: -1 });

        return logs.map((log) => ({
            id: log._id,
            title: log.description,
            timestamp: log.date,
        }));
    }
}

export default new ActivityService();
