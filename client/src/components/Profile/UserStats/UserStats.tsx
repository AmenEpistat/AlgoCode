import styles from './UserStats.module.scss';
import UserStatsItem from '@/components/Profile/UserStats/UserStatsItem.tsx';
import type { UserStat } from '@/types/user-stat.ts';
import { classNames } from '@/utils/classNames.ts';

interface Props {
    stats: UserStat;
    className?: any;
}

const UserStats = ({ stats, className }: Props) => {
    const statsArray = Object.entries(stats);
    return (
        <ul className={classNames(styles['user-stats'], className)}>
            {statsArray.map((stat) => (
                <li className={styles['user-stat__item']} key={stat[0]}>
                    <UserStatsItem stat={stat[0]} value={stat[1]} />
                </li>
            ))}
        </ul>
    );
};

export default UserStats;
