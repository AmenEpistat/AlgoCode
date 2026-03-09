import { Router } from 'express';
import islandController from '../controllers/island-controller';

const router = Router();

router.get('/', islandController.getIslands);
router.get('/:slug', islandController.getIslandBySlug);

export default router;
