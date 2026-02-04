import type { Text } from '@/types/text.ts';
import type { CodeLanguage, CodeTest } from '@/types/code.ts';

export interface Task extends Text {
    type: TaskType;
    progress: number;
}

export type TaskType = 'theory' | 'code' | 'test';

export interface TaskCodeType extends Task {
    type: 'code';
    tests: CodeTest[];
    starterCode: Record<CodeLanguage, string>;
    point: number;
}

export interface TaskTheory extends Task {
    type: 'theory';
}

export interface TaskTest extends Task {
    type: 'test';
}
