import type { Text } from '@/types/text.ts';

export interface Task extends Text {
    type: TaskType;
    progress: number;
}

export type TaskType = 'theory' | 'code' | 'test';
