import { Router } from 'express';
import ProfileController from '../controllers/profile-controller';

const router = Router();

router.get('/achievements', ProfileController.getAchievements);
router.get('/activity/calendar', ProfileController.getCalendarData);
router.get('/activity/day', ProfileController.getDayEvents);

export default router;
