import Fireworks from "@fireworks-js/react";

const Firework = () => {
    return (
        <Fireworks
            className="absolute top-0 left-0 w-full h-[100vh]"
            options={{
                opacity: 0.3,
                acceleration: 1.02,
                friction: 0.97,
                gravity: 1.5,
                particles: 125,
                traceLength: 3,
                traceSpeed: 10,
                explosion: 5,
                intensity: 60,
                flickering: 50,
                lineStyle: 'round',
                hue: {
                    min: 0,
                    max: 360,
                },
                delay: {
                    min: 30,
                    max: 60,
                },
                rocketsPoint: {
                    min: 50,
                    max: 50,
                },
                lineWidth: {
                    explosion: {
                        min: 1,
                        max: 3,
                    },
                    trace: {
                        min: 1,
                        max: 2,
                    },
                },
                brightness: {
                    min: 50,
                    max: 80,
                },
                decay: {
                    min: 0.015,
                    max: 0.03,
                },
                mouse: {
                    click: true,
                    move: false,
                    max: 1,
                },
                sound: {
                    enabled: true,
                    files: ['./fireworks.mp3'],
                    volume: {
                        min: 4,
                        max: 8,
                    },
                },
            }}
        />
    );
};

export default Firework;
