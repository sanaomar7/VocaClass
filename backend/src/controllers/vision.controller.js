import { VISION_STATS } from "../data/visionStats.js";

export const getVisionStats = (req, res) => {
  res.json(VISION_STATS);
};
