import { AVATARS } from '@/config/avatar-config';

export const getAvatarUrl = (avatarId: string): string => {
    return AVATARS.find((a) => a.id === avatarId)?.url ?? AVATARS[0].url;
};
