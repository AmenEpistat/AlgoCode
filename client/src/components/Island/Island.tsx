import type { IslandType } from '../../types/island.ts';
import styles from './Island.module.scss';
import { classNames } from '../../utils/classNames.ts';

interface IslandProps {
    isCompleted: boolean;
    isLocked: boolean;
    type: IslandType;
}

const islandTypeStyles: Record<IslandType, string> = {
    plain: styles.plain,
    sort: styles.sort,
    recursive: styles.recursive,
};

const Island = ({ isCompleted, type, isLocked }: IslandProps) => {
    return (
        <div
            className={classNames(
                styles.island,
                islandTypeStyles[type],
                isLocked && styles.locked,
                isCompleted && styles.completed
            )}
        >
            <p />
        </div>
    );
};

export default Island;
