import type { CodeTest, TestCodeResult } from '@/types/code.ts';
import { useState } from 'react';

export const useTaskCodeRunner = (tests: CodeTest[]) => {
    const [result, setResult] = useState<TestCodeResult | null>(null);
    const [isRunning, setIsRunning] = useState(false);

    const runCode = (code: string) => {
        setIsRunning(true);

        const worker = new Worker(
            new URL('./task.worker.ts', import.meta.url),
            {
                type: 'module',
            }
        );

        worker.postMessage({ code, tests });

        const timer = setTimeout(() => {
            worker.terminate();

            setResult({
                status: 'Time Limit Exceeded',
                passed: 0,
                total: tests.length,
                time: 2000,
                memory: 0,
                score: 0,
                errorMessage: 'Execution took too long (limit: 2000ms)',
            });
            setIsRunning(false);
        }, 2000);

        worker.onmessage = (e) => {
            clearTimeout(timer);
            setResult(e.data);
            setIsRunning(false);
            worker.terminate();
        };

        worker.onerror = (e) => {
            clearTimeout(timer);
            console.error('Worker error:', e);
            setIsRunning(false);
            worker.terminate();
        };
    };

    return { result, runCode, isRunning };
};
