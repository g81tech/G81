import { IOptions, RecursivePartial } from 'tsparticles-engine'

export const particlesoptions: RecursivePartial<IOptions> = {
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  fpsLimit: 120,

  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ['#555', '#ebce6a'],
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#b6b2b2',
      },
    },
    opacity: {
      value: 0.4211089197812949,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5.017060304327615,
      random: true,
      anim: {
        enable: true,
        speed: 12.181158184520175,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#555',
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas' as const,
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: ['push', 'attract'],
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.3,
        },
      },
      repulse: {
        distance: 150,
        duration: 0.2,
      },
      push: {
        particles_nb: 5,
      },
    },
  },
  retina_detect: true,
}
