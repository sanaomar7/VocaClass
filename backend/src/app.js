// backend/src/app.js
import express from 'express';
import cors from 'cors';
import { registerRoutes } from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

registerRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
