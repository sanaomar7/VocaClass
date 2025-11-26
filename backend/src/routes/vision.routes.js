import express from "express";
import { getVisionStats } from "../controllers/vision.controller.js";
const router = express.Router();

router.get("/", getVisionStats);

export default router;
