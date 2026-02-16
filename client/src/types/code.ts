export interface CodeTest {
    id: number;
    name: string;
    input: any[];
    expected: any;
    output?: any;
}

export interface TestCodeResult {
    status: string;
    passed: number;
    total: number;
    score: number;
    lastFailed?: CodeTest | null;
    errorMessage?: string;
    time?: number;
    memory?: number;
    logs?: string[];
}

export type CodeLanguage = 'javascript' | 'cpp' | 'python';
