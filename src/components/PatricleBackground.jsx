import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function ParticleBackground() {
    async function loadParticles(main) {
        await loadFull(main);
    }
    return (
        <Particles
            id="tsparticles"
            init={loadParticles}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                particles: {
                    number: {
                        value: 25,
                        density: {
                            enable: false,
                            value_area: 1200,
                        },
                    },
                    color: {
                        value: "#16b800",
                    },
                    shape: {
                        type: "diamond",
                        options: {
                            sides: 8,
                        },
                    },
                    opacity: {
                        value: 0.8,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 2,
                            opacity_min: 0.1,
                            sync: true,
                        },
                    },
                    size: {
                        value: 4,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    rotate: {
                        value: 0,
                        random: true,
                        direction: "clockwise",
                        animation: {
                            enable: true,
                            speed: 10,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 600,
                        color: "#16b800",
                        opacity: 0.6,
                        width: 4,
                        zIndex: -1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: ["grab"],
                        },
                        onclick: {
                            enable: false,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
                background: {
                    color: "#b2b2b2",
                    image: "",
                    position: "50% 50%",
                    repeat: "repeat",
                    size: "cover",
                },
            }}
        />
    );
}

export default ParticleBackground;
