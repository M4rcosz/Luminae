"use client"

import { useEffect, useState } from "react";

const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => setSeconds(59 - new Date().getSeconds()), 1000);
        setMinutes(59 - new Date().getMinutes());
        setHours(23 - new Date().getHours());

        return () => clearInterval(intervalId);
    }, [seconds])

    const addZero = (n: number) => n < 10 ? "0" + n : n;

    return <div className="flex justify-center gap-2">
        <span className="flex flex-col text-xs text-[#555] xl:text-sm">
            <strong className="text-lg font-extrabold text-[#111] xl:text-2xl">{addZero(hours)}</strong>
            hour
        </span>

        <span className="text-2xl text-[#555]">:</span>

        <span className="flex flex-col text-xs text-[#555] xl:text-sm">
            <strong className="text-lg font-extrabold text-[#111] xl:text-2xl">{addZero(minutes)}</strong>
            min
        </span>

        <span className="text-2xl text-[#555]">:</span>

        <span className="flex flex-col text-xs text-[#555] xl:text-sm">
            <strong className="text-lg font-extrabold text-[#111] xl:text-2xl">{addZero(seconds)}</strong>
            sec
        </span>
    </div>
}

export default Timer