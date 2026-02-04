import { useEffect, useState } from 'react';
import type { TaskCodeType } from '@/types/task';
import TaskCode from '@/components/Tasks/TaskCode/TaskCode.tsx';
import '@/styles/pages/task-code-page.scss';
import { Select } from 'antd';
import type { CodeLanguage } from '@/types/code.ts';

interface Props {
    task: TaskCodeType;
}

const TaskCodePage = ({ task }: Props) => {
    const [language, setLanguage] = useState<CodeLanguage>('javascript');
    const [code, setCode] = useState(task.starterCode[language] || '');

    useEffect(() => {
        setCode(task.starterCode[language] || '');
    }, [language]);

    return (
        <div className='task-code-page content-wrapper'>
            <section className='task-code__description'>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </section>

            <section className='task-code__editor'>
                <Select
                    value={language}
                    style={{ width: 120 }}
                    onChange={setLanguage}
                    options={Object.keys(task.starterCode).map((lang) => ({
                        value: lang,
                        label: lang,
                    }))}
                />
                <TaskCode
                    value={code}
                    onChange={(code) => setCode(code)}
                    language={language}
                />
            </section>
        </div>
    );
};

export default TaskCodePage;
