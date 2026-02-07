import styles from './TaskCode.module.scss';
import { Button, Select } from 'antd';
import {
    UndoOutlined,
    AlignLeftOutlined,
    CaretRightOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import CodeEditor from '@/components/CodeEditor/CodeEditor.tsx';
import type { CodeLanguage } from '@/types/code.ts';

interface TaskCodeProps {
    starterCode: Record<CodeLanguage, string>;
    runCode: (code: string) => void;
    editorRef: React.RefObject<any>;
}

const TaskCode = ({ starterCode, editorRef, runCode }: TaskCodeProps) => {
    const [language, setLanguage] = useState<CodeLanguage>('javascript');

    const handleRun = () => {
        const code = editorRef.current?.getValue();
        if (!code) return;

        runCode(code);
    };

    useEffect(() => {
        editorRef.current?.setValue(starterCode[language] ?? '');
    }, [language]);

    return (
        <div className={styles['task-code']}>
            <div className={styles['task-code__wrapper']}>
                <Select
                    className={styles['task-code__select']}
                    value={language}
                    style={{ width: 120 }}
                    onChange={setLanguage}
                    options={Object.keys(starterCode).map((lang) => ({
                        value: lang,
                        label: lang,
                    }))}
                />
                <div className={styles['task-code__controls']}>
                    <Button
                        icon={<AlignLeftOutlined />}
                        type='text'
                        onClick={() =>
                            editorRef.current
                                ?.getAction('editor.action.formatDocument')
                                .run()
                        }
                    />
                    <Button
                        icon={<UndoOutlined />}
                        type='text'
                        style={{ rotate: '90deg' }}
                        onClick={() =>
                            editorRef.current?.setValue(
                                starterCode[language] ?? ''
                            )
                        }
                    />
                </div>
            </div>

            <CodeEditor
                value={starterCode[language]}
                language={language}
                editorRef={editorRef}
            />
            <Button
                icon={<CaretRightOutlined style={{ fontSize: '30px' }} />}
                type='text'
                className={styles['task-code__button']}
                onClick={handleRun}
            >
                Run
            </Button>
        </div>
    );
};

export default TaskCode;
