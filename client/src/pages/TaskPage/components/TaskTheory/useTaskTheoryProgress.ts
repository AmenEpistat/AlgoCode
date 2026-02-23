import { useState } from 'react';

export const useTaskTheoryProgress = (taskProgress: number) => {
    const [progress, setProgress] = useState(taskProgress);

    const isCompleted = progress === 100;

    const handleAction = () => {
        if (!isCompleted) {
            setProgress(100);
        } else {
            console.log('Переход к следующей задаче');
        }
    };

    return { isCompleted, handleAction };
};
