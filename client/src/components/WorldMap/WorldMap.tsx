import type { IslandData } from '../../types/island.ts';
import Island from '../Island/Island.tsx';
import styles from './WorldMap.module.scss';
import Fog from '../Fog/Fog.tsx';

interface WorldMapProps {
    islands: IslandData[];
}

const WorldMap = ({ islands }: WorldMapProps) => {
    return (
        <div className={styles.worldMapViewport}>
            <div className={styles.worldMap}>
                <Fog className={styles.worldMap__fog} />
                {islands.map((island) => (
                    <div
                        className={styles.worldMap__island}
                        key={island.id}
                        style={{
                            top: `${island.y}%`,
                            left: `${island.x}%`,
                        }}
                    >
                        <Island island={island} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorldMap;
