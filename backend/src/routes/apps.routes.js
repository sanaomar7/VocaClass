// backend/src/routes/apps.routes.js
import { Router } from 'express';
import { getAllApps } from '../controllers/apps.controller.js';

const router = Router();

router.get('/', getAllApps);

export default router;
