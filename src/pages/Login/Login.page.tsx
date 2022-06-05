import React from 'react';

// Components
import { LoginForm, ParticlesBakground } from 'components';


const LoginPage: React.FC = () => {
    return (
        <div id="login-page" className="page">
            <ParticlesBakground />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
