// backend/src/routes/planner.routes.js
import { Router } from 'express';
import { getRecommendations } from '../controllers/planner.controller.js';

const router = Router();

router.post('/recommendations', getRecommendations);

export default router;
