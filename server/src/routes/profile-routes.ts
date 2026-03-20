import { Router } from 'express';
import ProfileController from '../controllers/profile-controller';

const router = Router();

router.get('/', ProfileController.getProfile);
router.patch('/display-name', ProfileController.updateDisplayName);
router.get('/avatars', ProfileController.getAvailableAvatars);
router.patch('/avatar', ProfileController.updateAvatar);
router.get('/achievements', ProfileController.getAchievements);
router.get('/activity/calendar', ProfileController.getCalendarData);
router.get('/activity/day', ProfileController.getDayEvents);

export default router;
