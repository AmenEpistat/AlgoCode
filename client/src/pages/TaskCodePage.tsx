import { useState } from 'react';
import type { TaskCodeType, CodeTest, TestResult } from '@/types/task';
import TaskCode from '@/components/Tasks/TaskCode/TaskCode.tsx';

interface Props {
    task: TaskCodeType;
}

const TaskCodePage = ({ task }: Props) => {
    const [code, setCode] = useState(task.starterCode);
    const [result, setResult] = useState<TestResult | null>(null);

    const runTests = () => {
        let passed = 0;
        let failedTest: CodeTest | null = null;

        for (const test of task.tests) {
            try {
                if (test.run(code)) {
                    passed++;
                } else {
                    failedTest = test;
                    break;
                }
            } catch {
                failedTest = test;
                break;
            }
        }

        setResult({
            passed,
            total: task.tests.length,
            lastFailed: failedTest,
            score: passed * task.point,
        });
    };

    return (
        <div className='task-layout'>
            <section className='task-description'>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </section>

            <section className='task-editor'>
                <TaskCode task={task} onSubmit={runTests} />

                {result && (
                    <div className='task-result'>
                        <p>
                            Пройдено тестов: {result.passed} / {result.total}
                        </p>
                        <p>Баллы: {result.score}</p>

                        {result.lastFailed && (
                            <p>
                                ❌ Последний тест:{' '}
                                {result.lastFailed.description}
                            </p>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
};

export default TaskCodePage;
