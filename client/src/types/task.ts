import type { Text } from '@/types/text.ts';
import type { CodeLanguage, CodeTest } from '@/types/code.ts';

export interface Task extends Text {
    type: TaskType;
    progress: number;
}

export type TaskType = 'theory' | 'code' | 'test';

export type TaskDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface TaskCodeType extends Task {
    type: 'code';
    tests: CodeTest[];
    starterCode: Record<CodeLanguage, string>;
    difficulty: TaskDifficulty;
}

export interface TaskTheory extends Task {
    type: 'theory';
}

export interface TaskTest extends Task {
    type: 'test';
}
