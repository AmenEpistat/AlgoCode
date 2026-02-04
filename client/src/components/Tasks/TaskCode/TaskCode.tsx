import styles from './TaskCode.module.scss';
import Editor from '@monaco-editor/react';
import { editorOptions } from '@/config/editorOptions.ts';

interface TaskCodeProps {
    value: string;
    onChange: (code: string) => void;
    language: string;
}

const TaskCode = ({ value, onChange, language }: TaskCodeProps) => {
    return (
        <div className={styles['task-code']}>
            <div className={styles['task-code__editor']}>
                <Editor
                    height='100%'
                    width='100%'
                    language={language || 'javascript'}
                    value={value}
                    onChange={(value) => onChange(value ?? '')}
                    options={editorOptions}
                    theme='light'
                />
            </div>
        </div>
    );
};

export default TaskCode;
