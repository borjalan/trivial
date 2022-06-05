import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import { LoginPage, NotFoundPage } from 'pages';


const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
