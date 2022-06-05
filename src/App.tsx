import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

// Router
import AppRouter from 'router';

// Styles
import AppTheme from "styles/Theme"


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={AppTheme}>
                <AppRouter />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
