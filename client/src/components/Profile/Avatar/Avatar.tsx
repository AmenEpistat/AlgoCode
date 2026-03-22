import { getAvatarUrl } from '@/utils/avatar.ts';
import styles from './Avatar.module.scss';
import { classNames } from '@/utils/classNames.ts';

const Avatar = ({
    avatarId,
    className,
}: {
    avatarId: string;
    className: any;
}) => {
    return (
        <div className={classNames(styles.avatar, className)}>
            <img src={getAvatarUrl(avatarId)} alt='avatar.' width='200px' />
        </div>
    );
};

export default Avatar;
