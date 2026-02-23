import type { IslandData } from '../../types/island.ts';
import Island from '../Island/Island.tsx';
import styles from './WorldMap.module.scss';
import Fog from '@/components/UI/Fog/Fog.tsx';
import { useState } from 'react';
import { classNames } from '../../utils/classNames.ts';

interface WorldMapProps {
    islands: IslandData[];
}

const WorldMap = ({ islands }: WorldMapProps) => {
    const [activeIslandId, setActiveIslandId] = useState<string | null>(null);

    const sortedIslands = [...islands].sort((a, b) => a.order - b.order);

    return (
        <div className={styles.worldMapViewport}>
            <div className={styles.worldMap}>
                <Fog className={styles.worldMap__fog} />
                <svg
                    className={styles.worldMap__paths}
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'
                >
                    {sortedIslands.map((island, index) => {
                        const next = sortedIslands[index + 1];
                        if (!next) return null;

                        const isActive = island.id === activeIslandId;
                        if (!isActive) return null;

                        return (
                            <path
                                key={`${island.id}-${next.id}`}
                                d={`M ${island.x} ${island.y} Q ${(island.x + next.x) / 2} ${(island.y + next.y) / 2 - 5} ${next.x} ${next.y}`}
                                className={classNames(
                                    styles.worldMap__path,
                                    next.isLocked && styles.worldMap__pathLocked
                                )}
                            />
                        );
                    })}
                </svg>

                {sortedIslands.map((island) => (
                    <div
                        key={island.id}
                        className={styles.worldMap__island}
                        style={{
                            top: `${island.y}%`,
                            left: `${island.x}%`,
                        }}
                        onMouseEnter={() => setActiveIslandId(island.id)}
                        onMouseLeave={() => setActiveIslandId(null)}
                    >
                        <Island island={island} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorldMap;
