import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/StoreContext';
import type { Achievement } from '@/types/achievement';
import styles from './AchievementShowcase.module.scss';
import AchievementBadge from '@/components/Achievement/AchievementBadge/AchievementBadge.tsx';

export const AchievementShowcase = observer(() => {
    const { userStore } = useStore();

    const handleOpenModal = (achievement: Achievement) => {
        userStore.showAchievementModal(achievement);
    };

    return (
        <section className={styles['achievement-showcase']}>
            <h4 className={styles['achievement-showcase__title']}>
                Достижения
            </h4>

            <div className={styles['achievement-showcase__grid']}>
                {userStore.allAchievementsWithStatus.map((achievement) => (
                    <div
                        key={achievement.id}
                        onClick={() => handleOpenModal(achievement)}
                        className={
                            !achievement.isUnlocked
                                ? styles['achievement-showcase__locked']
                                : styles['achievement-showcase__unlocked']
                        }
                    >
                        <AchievementBadge achievement={achievement} />
                    </div>
                ))}
            </div>
        </section>
    );
});
