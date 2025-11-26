// backend/src/controllers/apps.controller.js
import { APPS } from '../data/apps.js';

export const getAllApps = (req, res) => {
  res.json(APPS);
};
