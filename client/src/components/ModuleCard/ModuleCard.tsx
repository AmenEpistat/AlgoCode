import styles from './ModuleCard.module.scss';
import type { Module } from '@/types/module.ts';
import { classNames } from '@/utils/classNames.ts';
import { Button } from 'antd';
import { ProgressBar } from '@/components/UI/ProgressBar/ProgressBar.tsx';

interface ModuleCardProps {
    module: Module;
    isLast: boolean;
}

export const ModuleCard = ({ module, isLast }: ModuleCardProps) => {
    return (
        <div
            className={classNames(
                styles.moduleCard,
                module.progress !== null &&
                    module.progress < 100 &&
                    styles['moduleCard--open'],
                module.progress === 100 && styles['moduleCard--done'],
                isLast && styles['moduleCard--last']
            )}
        >
            <ProgressBar
                className={styles.moduleCard__progress}
                percent={module.progress}
                type={'circle'}
                size={50}
            />
            <div className={styles.moduleCard__text}>
                <a
                    href={`/module/${module.id}`}
                    className={styles.moduleCard__title}
                >
                    {module.title}
                </a>
                <div className={styles.moduleCard__description}>
                    {module.description}
                </div>

                <Button
                    size={'middle'}
                    className={classNames(
                        styles.moduleCard__button,
                        'ant-btn-secondary'
                    )}
                >
                    {module.progress !== null
                        ? 'Пройти еще раз'
                        : 'Начать задания'}
                </Button>
            </div>
        </div>
    );
};
