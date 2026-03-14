import { Router } from 'express';
import { ProfileController } from '../controllers/profile-controller';

const router = Router();
const profileController = new ProfileController();

router.get('/achievements', profileController.getAchievements);

export default router;
