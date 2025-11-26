// frontend/src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.jsx';
import PlannerPage from '../pages/PlannerPage.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/planner" element={<PlannerPage />} />
  </Routes>
);

export default AppRoutes;
