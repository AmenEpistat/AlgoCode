import { Button } from 'antd';
import { classNames } from '@/utils/classNames.ts';
import styles from './TaskTheoryFooter.module.scss';

interface Props {
    isCompleted: boolean;
    onAction: () => void;
}

const TaskTheoryFooter = ({ isCompleted, onAction }: Props) => {
    return (
        <>
            {!isCompleted && (
                <>
                    <h3 className={styles['task-theory-footer__subtitle']}>
                        Прочитали главу?
                    </h3>
                    <p className={styles['task-theory-footer__text']}>
                        Нажмите кнопку «Готово», чтобы сохранить прогресс.
                    </p>
                </>
            )}

            <Button
                size='large'
                onClick={onAction}
                className={classNames(
                    styles['task-theory-footer__button'],
                    isCompleted
                        ? 'ant-btn-secondary-outline'
                        : 'ant-btn-primary-outline'
                )}
            >
                {isCompleted ? 'Продолжить' : 'Готово'}
            </Button>
        </>
    );
};

export default TaskTheoryFooter;
