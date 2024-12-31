import Fireworks from "@fireworks-js/react";
import { useState } from "react";
import Countdown from 'react-countdown';

const CountdownYear = () => {
    const [showFireworks, setShowFireworks] = useState(false);
    const [newYearMessage, setNewYearMessage] = useState(false);
    const [massage, setMessage] = useState(["Countdown Tahun Baru 2025"]);

    const newYears = () => {
        const newYearsDate = new Date("January 1, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const distance = newYearsDate - now;
        return distance;
    };

    const handleComplete = () => {
        setShowFireworks(true);
        setNewYearMessage(true);
    };

    return (
        <div className="bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat relative w-full h-[100vh]">
            {showFireworks && (
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
            )}

            <div className="absolute flex flex-col items-center justify-center h-[100vh] w-full">
                {newYearMessage ? (
                    <div className="bg-white/30 backdrop-blur-md p-10 rounded-xl">
                        <h1 className="text-white text-5xl font-LobsterTwo font-extrabold">Selamat tahun baru 2025</h1>
                    </div>
                ) : (
                    <>
                        <h1 className="text-white text-5xl text-center font-extrabold mb-3 font-LobsterTwo">{massage}</h1>
                        <Countdown
                            date={Date.now() + newYears()}
                            renderer={({ days, hours, minutes, seconds }) => (
                                <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 bg-white/30 backdrop-blur-md md:p-10 p-4 rounded-xl font-Oswald">
                                    <div className="flex flex-col w-[100px] p-10 items-center justify-center gap-2 bg-[#06071C] rounded-xl">
                                        <span className="text-5xl text-white font-bold">{days}</span>
                                        <span className="text-2xl text-white">Hari</span>
                                    </div>
                                    <div className="flex flex-col w-[100px] items-center justify-center gap-2 bg-[#06071C] p-10 rounded-xl">
                                        <span className="text-5xl text-white font-bold">{hours}</span>
                                        <span className="text-2xl text-white">Jam</span>
                                    </div>
                                    <div className="flex flex-col w-[100px] items-center justify-center gap-2 bg-[#06071C] p-10 rounded-xl">
                                        <span className="text-5xl text-white font-bold">{minutes}</span>
                                        <span className="text-2xl text-white">Menit</span>
                                    </div>
                                    <div className="flex flex-col w-[100px] items-center justify-center gap-2 bg-[#06071C] p-10 rounded-xl">
                                        <span className="text-5xl text-[#FFC032] font-bold">{seconds}</span>
                                        <span className="text-2xl text-[#FFC032]">Detik</span>
                                    </div>
                                </div>
                            )}
                            onComplete={handleComplete}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default CountdownYear;
