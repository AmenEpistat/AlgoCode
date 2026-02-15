import React, { useEffect, useState } from 'react';
import type { CodeLanguage } from '@/types/code.ts';

export const useTaskCode = (
    starterCode: Record<CodeLanguage, string>,
    editorRef: React.RefObject<any>
) => {
    const [language, setLanguage] = useState<CodeLanguage>('javascript');
    const [isAutoSuggest, setIsAutoSuggest] = useState<boolean>(false);

    const switchAutoSuggest = (): void => {
        setIsAutoSuggest(!isAutoSuggest);
    };

    const resetCode = () => {
        editorRef.current?.setValue(starterCode[language] ?? '');
    };

    const formatCode = () => {
        editorRef.current?.getAction('editor.action.formatDocument')?.run();
    };

    const getCode = () => editorRef.current?.getValue() || '';

    useEffect(() => {
        editorRef.current?.setValue(starterCode[language] ?? '');
    }, [language, starterCode]);

    return {
        language,
        resetCode,
        getCode,
        formatCode,
        setLanguage,
        isAutoSuggest,
        switchAutoSuggest,
    };
};
