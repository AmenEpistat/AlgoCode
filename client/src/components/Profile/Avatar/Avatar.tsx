import { getAvatarUrl } from '@/utils/avatar.ts';
import styles from './Avatar.module.scss';

const Avatar = ({ avatarId }: { avatarId: string }) => {
    return (
        <div className={styles.avatar}>
            <img src={getAvatarUrl(avatarId)} alt='avatar.' width='200px' />
        </div>
    );
};

export default Avatar;
