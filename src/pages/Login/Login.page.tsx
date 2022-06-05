import React from 'react';
import { loadFull } from "tsparticles";

// Components
import { LoginForm } from '../../components';
import Particles from 'react-tsparticles';

// Styles
import "../../styles/Login.styles.css";

// Constants
import { PARTICLE_CONFIG } from '../../constants/Login.constants';


const LoginPage: React.FC = () => {

    const particlesInit = async (main: any) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = async (container: any) => {
        console.log(container);
    };

    return (
        <div id="login-page">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={PARTICLE_CONFIG}
            />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
