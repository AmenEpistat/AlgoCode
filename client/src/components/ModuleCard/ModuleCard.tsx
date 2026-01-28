import styles from './ModuleCard.module.scss';
import type { Module } from '@/types/module.ts';
import { classNames } from '@/utils/classNames.ts';

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
            <div className={styles.moduleCard__text}>
                <h2 className={styles.moduleCard__title}>{module.title}</h2>
                <div className={styles.moduleCard__description}>
                    {module.description}
                </div>
            </div>
        </div>
    );
};
