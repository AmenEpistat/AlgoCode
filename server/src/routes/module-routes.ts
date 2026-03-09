import { Router } from 'express';
import moduleController from '../controllers/module-controller';

const router = Router();

router.get('/:slug', moduleController.getModuleDetails);

export default router;