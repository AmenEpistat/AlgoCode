import { useState, useEffect, useMemo } from 'react';
import type { TaskQuizType } from '@/types/task.ts';

export const useQuizProgress = (task: TaskQuizType) => {
    const storageKey = `quiz_${task.id}`;

    const [answers, setAnswers] = useState<Record<string, string>>(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : {};
    });

    const [currentIdx, setCurrentIdx] = useState<number>(() => {
        const firstUnanswered = task.questions.findIndex((q) => !answers[q.id]);
        return firstUnanswered !== -1 ? firstUnanswered : 0;
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(answers));
    }, [answers, storageKey]);

    const currentQuestion = task.questions[currentIdx];
    const isLast = currentIdx === task.questions.length - 1;
    const canNext = !!answers[currentQuestion.id];

    const answeredIndices = useMemo(() => {
        return task.questions
            .map((q, i) => (answers[q.id] ? i : -1))
            .filter((i) => i !== -1);
    }, [answers, task.questions]);

    const handleSelect = (val: string) => {
        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }));
    };

    const goNext = (onFinish: (a: any) => void) => {
        if (isLast) {
            onFinish(answers);
            localStorage.removeItem(storageKey);
        } else {
            setCurrentIdx((prev) => prev + 1);
        }
    };

    const goPrev = () => {
        setCurrentIdx((prev) => Math.max(0, prev - 1));
    };

    return {
        currentQuestion,
        currentIdx,
        setCurrentIdx,
        answers,
        answeredIndices,
        isLast,
        canNext,
        handleSelect,
        goNext,
        goPrev,
    };
};
