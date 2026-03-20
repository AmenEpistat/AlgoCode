import { User } from '../models/user-model';
import { UserProgress } from '../models/user-stats-model';
import ApiError from '../exceptions/api-error';
import { AvatarId, AVATARS } from '../config/avatar-config';

class ProfileService {
    async getProfile(userId: string) {
        const [user, stats] = await Promise.all([
            User.findById(userId).lean(),
            UserProgress.findOne({ userId }).lean(),
        ]);
        if (!user) throw new ApiError(404, 'Пользователь не найден');

        return {
            displayName: user.displayName,
            avatar: user.avatar,
            email: user.email,
            stats: stats?.stats ?? {
                totalXP: 0,
                level: 1,
                rank: 1,
                currentStreak: 0,
                lastActivityDate: null,
            },
            achievements: stats?.achievements ?? [],
        };
    }

    async updateDisplayName(userId: string, displayName: string) {
        const exists = await User.findOne({
            displayName,
            _id: { $ne: userId },
        });
        if (exists) throw new ApiError(409, 'Это имя уже занято');

        const user = await User.findByIdAndUpdate(
            userId,
            { displayName },
            { returnDocument: 'after' }
        ).lean();
        if (!user) throw new ApiError(404, 'Пользователь не найден');
        return user;
    }

    async updateAvatar(userId: string, avatarId: AvatarId) {
        if (!AVATARS.includes(avatarId)) {
            throw new ApiError(400, 'Недопустимый аватар');
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { avatar: avatarId },
            { returnDocument: 'after' }
        ).lean();
        if (!user) throw new ApiError(404, 'Пользователь не найден');
        return user;
    }

    async getAvailableAvatars() {
        return AVATARS;
    }
}

export default new ProfileService();
