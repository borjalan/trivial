import React from 'react';
import { loadFull } from "tsparticles";

// Components
import { LoginForm } from 'components';
import Particles from 'react-tsparticles';

// Styles
import "styles/Login.styles.css";

// Constants
import { PARTICLE_BKG } from 'constants/Backgrounds.constants';


const LoginPage: React.FC = () => {

    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <div id="login-page">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={PARTICLE_BKG}
            />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
