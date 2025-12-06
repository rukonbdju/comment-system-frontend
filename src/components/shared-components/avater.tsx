type PropsType = {
    url: string;
    alt: string;
    size: string;
}
const Avatar = ({ url, alt, size = "md" }: PropsType) => {
    const sizeClass = size === "sm" ? "w-8 h-8" : "w-10 h-10";
    return (
        <img src={url} alt={alt} className={`${sizeClass} rounded-full border-2 border-slate-200 dark:border-slate-700 object-cover`} />
    );
};

export default Avatar;