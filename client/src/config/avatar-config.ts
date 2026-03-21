const avatarModules = import.meta.glob('@/assets/images/avatars/*.png', {
    eager: true,
});

export const AVATARS = Object.keys(avatarModules).map((path) => {
    const id = path.split('/').pop()!;
    const url = (avatarModules[path] as { default: string }).default;
    return { id, url };
});
