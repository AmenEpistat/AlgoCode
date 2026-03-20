export const AVATARS = [
    'avatar_1.png',
    'avatar_2.png',
    'avatar_3.png',
] as const;

export type AvatarId = (typeof AVATARS)[number];
