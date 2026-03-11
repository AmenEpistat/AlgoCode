import { Stats } from '../models/user-stats-model';

export class StreakService {
    calculate(stats: Stats, today: Date): number {
        if (!stats.lastActivityDate) return 1;

        const lastDate = new Date(stats.lastActivityDate);
        lastDate.setHours(0, 0, 0, 0);

        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        yesterday.setHours(0, 0, 0, 0);

        if (lastDate.getTime() === yesterday.getTime())
            return stats.currentStreak + 1;
        if (lastDate.getTime() < yesterday.getTime()) return 1;
        return stats.currentStreak;
    }
}
