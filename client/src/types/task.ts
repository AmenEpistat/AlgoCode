import type { Text } from '@/types/text.ts';
import type { CodeLanguage, CodeTest } from '@/types/code.ts';
import type { Quiz } from '@/types/quiz.ts';

export interface Task extends Text {
    type: TaskType;
    progress: number;
}

export type TaskType = 'theory' | 'code' | 'quiz';

export type TaskDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface TaskCodeType extends Task {
    type: 'code';
    tests: CodeTest[];
    starterCode: Record<CodeLanguage, string>;
    difficulty: TaskDifficulty;
}

export interface TaskTheory extends Task {
    type: 'theory';
    body: string;
}

export interface TaskQuizType extends Task {
    type: 'quiz';
    questions: Quiz[];
}

export type TaskUnion = TaskCodeType | TaskTheory | TaskQuizType;
