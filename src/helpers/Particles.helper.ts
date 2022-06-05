import { loadFull } from "tsparticles";

export const particlesInit = async (main: any) => {
    await loadFull(main);
};