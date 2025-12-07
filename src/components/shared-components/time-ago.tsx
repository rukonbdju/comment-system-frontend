import getTimeAgo from "@/utils/get-time-ago";
import { useEffect, useState } from "react";

const TimeAgo = ({ time }: { time: string }) => {
    const [label, setLabel] = useState(() => getTimeAgo(time));

    useEffect(() => {
        const interval = setInterval(() => {
            setLabel(getTimeAgo(time));
        }, 60 * 1000); // update every minute

        return () => clearInterval(interval);
    }, [time]);

    return <span className="text-xs text-gray-500 ml-4 shrink-0">{label}</span>;
}

export default TimeAgo;
