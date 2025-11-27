// backend/src/routes/index.js
import appsRouter from './apps.routes.js';
import plannerRouter from './planner.routes.js';
import visionRoutes from './vision.routes.js';

/**
 * Register all API routes in one place
 * to keep the app organized and extensible.
 */
export const registerRoutes = (app) => {
  app.use('/api/apps', appsRouter);
  app.use('/api/planner', plannerRouter);
  app.use('/api/vision-stats', visionRoutes); 
};
