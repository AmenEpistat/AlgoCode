import { classNames } from '@/utils/classNames.ts';
import styles from './QuizSteps.module.scss';

interface QuizStepsProps {
    total: number;
    current: number;
    answeredIndices: number[];
    onStepClick: (index: number) => void;
}

const QuizSteps = ({
    total,
    current,
    answeredIndices,
    onStepClick,
}: QuizStepsProps) => (
    <ul className={styles['quiz-steps']}>
        {Array.from({ length: total }).map((_, index) => (
            <li
                key={index}
                className={classNames(
                    styles['quiz-steps__item'],
                    index === current && styles['quiz-steps__item--active'],
                    answeredIndices.includes(index) &&
                        styles['quiz-steps__item--answered']
                )}
                onClick={() => onStepClick(index)}
            >
                {index + 1}
            </li>
        ))}
    </ul>
);

export default QuizSteps;
