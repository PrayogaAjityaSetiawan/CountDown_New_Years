const CountdownCard = ({ days, hours, minutes, seconds }) => {
    return (
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
    );
};

export default CountdownCard;
