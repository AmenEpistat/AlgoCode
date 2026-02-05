import styles from './TaskCode.module.scss';
import { Button, Select } from 'antd';
import { UndoOutlined, AlignLeftOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import CodeEditor from '@/components/CodeEditor/CodeEditor.tsx';
import type { CodeLanguage } from '@/types/code.ts';

interface TaskCodeProps {
    starterCode: Record<CodeLanguage, string>;
    onChange: (code: string) => void;
    editorRef: React.RefObject<any>;
}

const TaskCode = ({ starterCode, onChange, editorRef }: TaskCodeProps) => {
    const [language, setLanguage] = useState<CodeLanguage>('javascript');
    const [code, setCode] = useState(starterCode[language] || '');

    useEffect(() => {
        setCode(starterCode[language] || '');
    }, [language]);

    const handleCodeChange = (value: string) => {
        setCode(value);
        onChange(value);
    };

    return (
        <div className={styles['task-code']}>
            <div className={styles['task-code__wrapper']}>
                <Select
                    className={styles['task-code__select']}
                    value={language}
                    style={{ width: 100 }}
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
                        onClick={() => setCode(starterCode[language])}
                    />
                </div>
            </div>

            <CodeEditor
                value={code}
                language={language}
                onChange={handleCodeChange}
                editorRef={editorRef}
            />
        </div>
    );
};

export default TaskCode;
