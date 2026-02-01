import type { Text } from '@/types/text.ts';

export interface Task extends Text {
    type: TaskType;
    progress: number;
}

export type TaskType = 'theory' | 'code' | 'test';

export interface TaskCodeType extends Task {
    type: 'code';
    language: 'ts' | 'js';
    starterCode: string;
    tests: CodeTest[];
    point: number;
}

export interface CodeTest {
    id: number;
    description: string;
    run: (userCode: string) => boolean;
}

export interface TestResult {
    passed: number;
    total: number;
    score: number;
    lastFailed: CodeTest | null;
}

export interface TaskTheory extends Task {
    type: 'theory';
}

export interface TaskTest extends Task {
    type: 'test';
}
