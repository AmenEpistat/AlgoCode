import type { TaskType } from '@/types/task.ts';

export interface ActivityEvent {
    id: string;
    type: TaskType;
    title: string;
    xp: number;
    timestamp: string;
}
