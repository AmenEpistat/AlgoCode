import styles from './StepCard.module.scss';
import { classNames } from '@/utils/classNames.ts';
import type { Step, Task } from '@/types/module.ts';
import TaskCard from '@/components/TaskCard/TaskCard.tsx';

interface StepCardProps {
    step: Step;
}

const StepCard = ({ step }: StepCardProps) => {
    return (
        <div
            className={classNames(
                styles['step-card'],
                step.progress > 0 &&
                    step.progress <= 100 &&
                    styles['step-card--open'],
                step.progress === 100 && styles['step-card--done']
            )}
        >
            <h3 className={styles['step-card__title']}>{step.title}</h3>
            <p className={styles['step-card__description']}>
                {step.description}
            </p>
            <ul className={styles['step-card__tasks']}>
                {step.tasks.map((task: Task) => (
                    <li className={styles['step-card__task']} key={task.id}>
                        <TaskCard task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StepCard;
