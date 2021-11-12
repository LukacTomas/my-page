import React from "react";
import Particles from "react-tsparticles";

/**
 *  particlesOption - option that will be provided to
 *  BackgroundParticles component
 */
const particlesOption = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },

    modes: {
      bubble: {
        distance: 300,
        duration: 2,
        opacity: 0.4,
        size: 8,
        color: "#feae53",
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },

    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 500,
      },
      value: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

/**
 * Component BackgroundParticles - create flying particles in background
 * Particles imported from react-tsparticles
 *
 * Author: Tomas Lukac
 */
export default function BackgroundParticles() {
  return <Particles options={particlesOption} />;
}
