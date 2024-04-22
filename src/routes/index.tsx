import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home';

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/github-explorer" element={<Home />} />
      <Route path="*" element={<Navigate to="/github-explorer" />} />
    </Routes>
  );
};