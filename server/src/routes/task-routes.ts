import { Router } from 'express';
import taskController from '../controllers/task-controller';

const router = Router();

router.get('/:id', taskController.getTaskData);

export default router;
