import { useState } from "react";
import Countdown from 'react-countdown';
import Fireworks from "./components/Fireworks";
import CountdownCard from "./components/CountdownCard";

const CountdownYear = () => {
    const [showFireworks, setShowFireworks] = useState(false);
    const [newYearMessage, setNewYearMessage] = useState(false);
    const [massage, setMessage] = useState(["Countdown Tahun Baru 2026"]);

    const newYears = () => {
        const newYearsDate = new Date("January 1, 2026 00:00:00").getTime();
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
                <Fireworks/>
            )}

            <div className="absolute flex flex-col items-center justify-center h-[100vh] w-full">
                {newYearMessage ? (
                    <div className="bg-white/30 backdrop-blur-md p-10 rounded-xl">
                        <h1 className="text-white text-5xl font-LobsterTwo font-extrabold text-center capitalize">Selamat tahun baru 2026🎉</h1>
                    </div>
                ) : (
                    <>
                        <h1 className="text-white text-5xl text-center font-extrabold mb-3 font-LobsterTwo">{massage}</h1>
                        <Countdown
                            date={Date.now() + newYears()}
                            renderer={({ days, hours, minutes, seconds }) => (
                                <CountdownCard
                                    days={days}
                                    hours={hours}
                                    minutes={minutes}
                                    seconds={seconds}
                                />
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
