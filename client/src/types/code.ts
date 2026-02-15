export interface CodeTest {
    id: number;
    input: string;
    output: string;
    run: (userCode: string) => boolean;
}

export interface TestCodeResult {
    passed: number;
    total: number;
    score: number;
    lastFailed: CodeTest | null;
}

export type CodeLanguage = 'javascript' | 'cpp' | 'python';
