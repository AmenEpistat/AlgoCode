import { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async';
import ApiError from '../exceptions/api-error';
import ActivityService from '../services/activity-service';
import AchievementService from '../services/achievement-service';
import ProfileService from '../services/profile-service';

class ProfileController {
    getProfile = catchAsync(async (req: Request, res: Response) => {
        const profile = await ProfileService.getProfile(
            req.user?._id as string
        );
        res.json(profile);
    });

    getAvailableAvatars = catchAsync(async (req: Request, res: Response) => {
        const avatars = await ProfileService.getAvailableAvatars();
        res.json(avatars);
    });

    updateAvatar = catchAsync(async (req: Request, res: Response) => {
        const { avatarId } = req.body;
        if (!avatarId) throw new ApiError(400, 'avatarId обязателен');
        const user = await ProfileService.updateAvatar(
            req.user?._id as string,
            avatarId
        );
        res.json(user);
    });

    updateDisplayName = catchAsync(async (req: Request, res: Response) => {
        const { displayName } = req.body;
        if (!displayName) throw new ApiError(400, 'displayName обязателен');
        const user = await ProfileService.updateDisplayName(
            req.user?._id as string,
            displayName
        );
        res.json(user);
    });

    getAchievements = catchAsync(async (req: Request, res: Response) => {
        const userId = req.user?._id as string;
        const achievements = await AchievementService.getAll(userId);
        res.json(achievements);
    });

    getCalendarData = catchAsync(async (req: Request, res: Response) => {
        const data = await ActivityService.getCalendarData(
            req.user?._id as string
        );
        res.json(data);
    });

    getDayEvents = catchAsync(async (req: Request, res: Response) => {
        const { date } = req.query;
        if (!date) throw new ApiError(400, 'Не выбрана дата');

        const events = await ActivityService.getDayEvents(
            req.user?._id as string,
            date as string
        );
        res.json(events);
    });
}

export default new ProfileController();
