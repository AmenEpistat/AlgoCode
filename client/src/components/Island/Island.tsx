import type { IslandData, IslandType } from '../../types/island.ts';
import styles from './Island.module.scss';
import { classNames } from '../../utils/classNames.ts';
import Plank from '@/components/UI/Plank/Plank.tsx';

interface IslandProps {
    island: IslandData;
}

const islandTypeStyles: Record<IslandType, string> = {
    plain: styles.plain,
    sort: styles.sort,
    recursive: styles.recursive,
};

const Island = ({ island }: IslandProps) => {
    return (
        <div
            className={classNames(
                styles.island,
                islandTypeStyles[island.type],
                island.isLocked && styles.locked,
                island.isCompleted && styles.completed
            )}
        >
            <div className={styles.island__plank}>
                <Plank
                    title={island.title}
                    progress={island.progress}
                    isLocked={island.isLocked}
                />
            </div>
        </div>
    );
};

export default Island;
