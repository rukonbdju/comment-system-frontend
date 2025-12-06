import { useEffect, useState } from "react";

const TimeAgo = ({ timestamp }: { timestamp: number }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => {
            const seconds = Math.floor((Date.now() - timestamp) / 1000);
            let interval = seconds / 31536000;
            if (interval > 1) return setTime(Math.floor(interval) + "y");
            interval = seconds / 2592000;
            if (interval > 1) return setTime(Math.floor(interval) + "mo");
            interval = seconds / 86400;
            if (interval > 1) return setTime(Math.floor(interval) + "d");
            interval = seconds / 3600;
            if (interval > 1) return setTime(Math.floor(interval) + "h");
            interval = seconds / 60;
            if (interval > 1) return setTime(Math.floor(interval) + "m");
            setTime("Just now");
        };
        update();
        const timer = setInterval(update, 60000);
        return () => clearInterval(timer);
    }, [timestamp]);

    return <span className="text-xs text-slate-500 dark:text-slate-400">{time}</span>;
};

export default TimeAgo;