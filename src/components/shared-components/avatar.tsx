import { useMemo } from "react";

type AvatarProps = {
    name: string;
    size?: number;
    className?: string;
};

//get first letters
const getInitials = (name: string) => {
    if (!name) return "U";
    const words = name.trim().split(/\s+/).filter(Boolean);

    if (words.length === 1) {
        return words[0].slice(0, 2).toUpperCase();
    }

    return (words[0][0] + words[1][0]).toUpperCase();
};

// Deterministic color based on name
const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = (hash & 0x00ffffff).toString(16).toUpperCase();
    return color.padStart(6, "0");
};

const Avatar = ({ name, size = 40, }: AvatarProps) => {
    const initials = useMemo(() => getInitials(name), [name]);
    const bgColor = useMemo(() => stringToColor(name || "user"), [name]);

    const imgUrl = `https://placehold.co/${size}x${size}/${bgColor}/ffffff?text=${encodeURIComponent(
        initials
    )}`;

    return (
        <img
            src={imgUrl}
            alt={name}
            width={size}
            height={size}
            className="rounded-full object-cover border-2 border-white shadow-md"
            loading="lazy"
        />
    );
}

export default Avatar;
