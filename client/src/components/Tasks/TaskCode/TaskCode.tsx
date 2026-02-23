import styles from './TaskCode.module.scss';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import CodeEditor from '@/components/Tasks/TaskCode/components/CodeEditor/CodeEditor.tsx';
import type { CodeLanguage } from '@/types/code.ts';
import { useTaskCode } from '@/components/Tasks/TaskCode/useTaskCode.ts';
import TaskCodeControls from '@/components/Tasks/TaskCode/TaskCodeControls.tsx';

interface TaskCodeProps {
    starterCode: Record<CodeLanguage, string>;
    runCode: (code: string) => void;
    editorRef: React.RefObject<any>;
}

const TaskCode = ({ starterCode, editorRef, runCode }: TaskCodeProps) => {
    const {
        language,
        setLanguage,
        resetCode,
        formatCode,
        getCode,
        isAutoSuggest,
        switchAutoSuggest,
    } = useTaskCode(starterCode, editorRef);

    const handleRun = () => {
        const code = getCode();
        if (code) runCode(code);
    };

    return (
        <div className={styles['task-code']}>
            <TaskCodeControls
                language={language}
                starterCode={starterCode}
                onFormat={formatCode}
                onReset={resetCode}
                setLanguage={setLanguage}
                isAutoSuggest={isAutoSuggest}
                onSwitchAuto={switchAutoSuggest}
            />
            <CodeEditor
                value={starterCode[language]}
                language={language}
                editorRef={editorRef}
                isAutoSuggest={isAutoSuggest}
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
