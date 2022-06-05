import React from 'react';
import Particles from 'react-tsparticles';

// Helpers
import { particlesInit } from 'helpers';

// Constants
import { PARTICLE_BKG } from 'constants/Backgrounds.constants';


const ParticlesBakground: React.FC = () => {
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={PARTICLE_BKG}
        />
    );
};

export default ParticlesBakground;
