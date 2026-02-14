import type { CodeTest, TestCodeResult } from '@/types/code.ts';
import { useState } from 'react';

export const useTaskCodeRunner = (tests: CodeTest[]) => {
    const [result, setResult] = useState<TestCodeResult | null>(null);
    const [isRunning, setIsRunning] = useState(false);

    const runCode = (code: string) => {
        setIsRunning(true);

        setTimeout(() => {
            let passedCount = 0;
            let lastFailed: CodeTest | null = null;

            for (const test of tests) {
                if (test.run(code)) {
                    passedCount++;
                } else {
                    lastFailed = test;
                    break;
                }
            }

            setResult({
                passed: passedCount,
                total: tests.length,
                score: passedCount * 10,
                lastFailed,
            });
            setIsRunning(false);
        }, 1000);
    };

    return { result, runCode, isRunning };
};
