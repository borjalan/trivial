import React from 'react';

// Components
import { LoginForm } from '../../components';

// Styles
import "../../styles/Login.styles.css";

const LoginPage: React.FC = () => {
    return (
        <div id="login-page">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
