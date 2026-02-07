import type { TaskDifficulty } from '@/types/task.ts';
import styles from './DifficultyTag.module.scss';
import { classNames } from '@/utils/classNames.ts';

interface DifficultyTagProps {
    difficulty: TaskDifficulty;
}

const DifficultyTag = ({ difficulty }: DifficultyTagProps) => {
    return (
        <div
            className={classNames(
                styles['difficulty-tag'],
                styles[`difficulty-tag--${difficulty}`]
            )}
        >
            {difficulty}
        </div>
    );
};

export default DifficultyTag;
