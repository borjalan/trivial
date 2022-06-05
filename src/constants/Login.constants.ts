export const TEXTS = {
  TITLE: 'Trivial',

  // Labels
  LABEL_NOMBRE: 'Nombre',
  LABEL_ID: 'Id Sala',
};

export const BUTTONS = {
  UNIRSE: 'Unirte a una sala',
  CREAR: 'Crear una sala',
};

export const ERRORS = {
  NOMBRE_NECESARIO: 'Tienes que escribir un nombre de mínimo 5 letras',
  NOMBRE_LARGO: 'El nombre es demasiado largo',
  ID_INVALIDO: 'El id de la sala no es valido',
};

export const PARTICLE_CONFIG: any = {
  background: {
    color: {
      value: '#344E41',
    },
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      grab: {
        distance: 400,
      },
      repulse: {
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          selectors: [],
        },
      },
    },
  },
  particles: {
    color: {
      value: '#A3B18A',
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
      speed: 1,
    },
    number: {
      density: {
        enable: true,
      },
      value: 10,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: {
        min: 0.3,
        max: 0.5,
      },
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    shape: {
      options: {
        polygon: {
          sides: 6,
        },
        star: {
          sides: 5,
        },
      },
      type: 'polygon',
    },
    size: {
      random: {
        enable: true,
        minimumValue: 50
      },
      value: {
        min: 50,
        max: 100,
      }
    },
  },
};
