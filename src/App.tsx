import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Router
import AppRouter from 'router';

// Styles
import AppTheme from "styles/Theme"

// Redux
import store from 'redux-reducers'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={AppTheme}>
                <Provider store={store}>
                    <AppRouter />
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
