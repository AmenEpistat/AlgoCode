import styles from './TaskCard.module.scss';
import { classNames } from '@/utils/classNames.ts';
import type { Task } from '@/types/task.ts';

interface TaskCardProps {
    task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
    return (
        <div
            className={classNames(
                styles['task-card'],
                task.progress === 100 && styles['task-card--done']
            )}
        >
            <h4 className={styles['task-card__title']}>{task.title}</h4>
            <p className={styles['task-card__description']}>
                {task.description}
            </p>
            <a
                href={`/task${task.id}`}
                className={classNames(
                    styles['task-card__link'],
                    styles[`task-card__link--${task.type}`]
                )}
            >
                {task.title}
            </a>
        </div>
    );
};

export default TaskCard;
