import type { Text } from '@/types/text.ts';

export interface Module extends Text {
    difficulty: number;
    order: number;
    progress: number;
}

export interface ModuleDetails extends Module {
    steps: Step[];
}

export interface Step extends Text {
    progress: number;
    tasks: Task[];
}

export interface Task extends Text {
    type: TaskType;
    progress: number;
}

export type TaskType = 'theory' | 'code' | 'test' | 'exam';
