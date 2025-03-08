import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./back.css";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log("Particles.js loaded");
        await loadFull(engine);
    }, []);

    return (
        <div className="particles-container">
            <Particles
                init={particlesInit}
                options={{
                    particles: {
                        number: { value: 100, density: { enable: true, value_area: 800 } },
                        color: { value: "#bb07f2" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5 },
                        size: { value: 3, random: true },
                        move: { enable: true, speed: 3 },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                    },
                    interactivity: {
                        events: { onhover: { enable: true, mode: "repulse" } },
                    },
                }}
            />
        </div>
    );
};

export default ParticlesBackground;
