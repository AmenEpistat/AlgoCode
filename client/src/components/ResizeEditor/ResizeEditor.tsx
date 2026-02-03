import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import styles from './ResizeEditor.module.scss';

const options = {
    contextmenu: false,

    fontFamily: 'JetBrains Mono, Fira Code, monospace',
    fontSize: 14,
    lineHeight: 22,

    matchBrackets: 'always',
    autoClosingBrackets: 'always',
    autoClosingQuotes: 'always',
    autoSurround: 'languageDefined',

    minimap: { enabled: false },

    lineNumbersMinChars: 3,
    glyphMargin: false,
    folding: false,

    overviewRulerLanes: 0,
    hideCursorInOverviewRuler: true,

    roundedSelection: false,
    automaticLayout: true,
};

interface ResizableEditorProps {
    value: string;
    onChange: (v: string) => void;
    language: string;
}

export const ResizableEditor = ({
    value,
    onChange,
    language,
}: ResizableEditorProps) => {
    const [height, setHeight] = useState(400);
    const [width, setWidth] = useState(600);

    const startResize = (
        e: React.MouseEvent,
        direction: 'horizontal' | 'vertical'
    ) => {
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = width;
        const startHeight = height;

        const onMouseMove = (ev: React.MouseEvent) => {
            ev.preventDefault();
            if (direction === 'vertical') {
                const newHeight = Math.max(
                    100,
                    Math.min(800, startHeight + (ev.clientY - startY))
                );
                setHeight(newHeight);
            } else {
                const newWidth = Math.max(
                    100,
                    Math.min(1000, startWidth + (ev.clientX - startX))
                );
                setWidth(newWidth);
            }
        };

        const onMouseUp = () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    };

    return (
        <div className={styles['resizer']} style={{ height, width }}>
            <Editor
                height='100%'
                width='100%'
                language={language || 'javascript'}
                value={value}
                onChange={(value) => onChange(value ?? '')}
                options={options}
                theme='light'
            />
            <div
                className={styles['resizer-height']}
                onMouseDown={(e) => startResize(e, 'vertical')}
            />
            <div
                className={styles['resizer-width']}
                onMouseDown={(e) => startResize(e, 'horizontal')}
            />
        </div>
    );
};
