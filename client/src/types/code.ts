export interface CodeTest {
    id: number;
    description: string;
    run: (userCode: string) => boolean;
}

export interface TestCodeResult {
    passed: number;
    total: number;
    score: number;
    lastFailed: CodeTest | null;
}

export type CodeLanguage = 'javascript' | 'cpp' | 'python';
