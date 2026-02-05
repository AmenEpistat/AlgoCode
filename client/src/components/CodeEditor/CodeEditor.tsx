import styles from './CodeEditor.module.scss';
import Editor, { type OnMount } from '@monaco-editor/react';
import { editorOptions } from '@/config/editorOptions.ts';
import React from 'react';

interface CodeEditorProps {
    value: string;
    onChange: (code: string) => void;
    language: string;
    editorRef?: React.RefObject<any>;
}

const CodeEditor = ({
    value,
    onChange,
    language,
    editorRef,
}: CodeEditorProps) => {
    const handleEditorMount: OnMount = (editor) => {
        if (editorRef) editorRef.current = editor;
    };

    return (
        <div className={styles['code-editor']}>
            <Editor
                height='100%'
                width='100%'
                language={language || 'javascript'}
                value={value}
                onChange={(value) => onChange(value ?? '')}
                options={editorOptions}
                theme='light'
                onMount={handleEditorMount}
            />
        </div>
    );
};

export default CodeEditor;
