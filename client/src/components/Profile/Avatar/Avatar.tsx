import { getAvatarUrl } from '@/utils/avatar.ts';

const Avatar = ({ avatarId }: { avatarId: string }) => {
    return (
        <div>
            <img src={getAvatarUrl(avatarId)} alt='avatar.' width='100px' />;
        </div>
    );
};

export default Avatar;
