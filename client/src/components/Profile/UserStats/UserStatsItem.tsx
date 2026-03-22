import { STAT_META } from '@/constants/stats';
import styles from './UserStats.module.scss';

interface Props {
    stat: string;
    value: number;
}

const UserStatsItem = ({ stat, value }: Props) => {
    const { label, icon } = STAT_META[stat] ?? { label: stat, icon: null };

    return (
        <div className={styles['user-stats-item']}>
            <p className={styles['user-stats__value-text']}>
                {' '}
                <span className={styles['user-stats-item__icon']}>{icon}</span>
                <span className={styles['user-stats-item__value']}>
                    {value}
                </span>
            </p>
            <span className={styles['user-stats-item__label']}>{label}</span>
        </div>
    );
};

export default UserStatsItem;
