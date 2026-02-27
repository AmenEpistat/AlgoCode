export interface Achievement {
    id: string;
    status: AchievementStatus;
    name: string;
    description: string;
    svgPath: string;   // или хранить на серве
}

export type AchievementStatus = 'locked' | 'unlocked';