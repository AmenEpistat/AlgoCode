import styles from './UserCard.module.scss';
import Avatar from '@/components/Profile/Avatar/Avatar.tsx';
import UserInfo from '@/components/Profile/UserInfo/UserInfo.tsx';
import UserStats from '@/components/Profile/UserStats/UserStats.tsx';
import { useStore } from '@/store/StoreContext.tsx';
import { observer } from 'mobx-react-lite';

const UserCard = observer(() => {
    const { userStore } = useStore();
    return (
        <div className={styles['user-card']}>
            <Avatar
                className={styles['user-card__avatar']}
                avatarId={userStore.avatar}
            />
            <UserInfo
                name={'Amen'}
                status={'Мир во всем мире'}
                email={'pupkin'}
            />
            <UserStats
                className={styles['user-card__stats']}
                stats={userStore.stats}
            />
        </div>
    );
});

export default UserCard;
