import type { Achievement } from '@/types/achievement.ts';
import styles from './AchievementBadge.module.scss';

interface Props {
    achievement: Achievement;
}

const AchievementBadge = ({ achievement }: Props) => {
    return (
        <div className={styles['achievement-badge']}>
            <img
                src={achievement.svgPath}
                alt={achievement.name}
                width='100px'
                height='100px'
            />
        </div>
    );
};

export default AchievementBadge;
