import { Router } from 'express';
import { ProgressController } from '../controllers/progress-controller';

const router = Router();
const progressController = new ProgressController();

router.post('/complete', progressController.completeTask);

export default router;
