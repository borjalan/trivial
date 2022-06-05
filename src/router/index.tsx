import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import { LoginPage, NotFoundPage } from '../pages';

// Styles
import AppTheme from "../styles/Theme"

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={AppTheme}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
