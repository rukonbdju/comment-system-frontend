import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    block?: boolean; // full width
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export const Button = ({
    children,
    isLoading = false,
    block = false,
    leftIcon,
    rightIcon,
    disabled,
    className = "",
    ...props
}: ButtonProps) => {
    return (
        <button
            {...props}
            disabled={disabled || isLoading}
            className={`
        inline-flex items-center justify-center gap-2
        px-4 py-2 rounded-md font-medium text-sm
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed
        bg-indigo-600 text-white hover:bg-indigo-700
        ${block ? "w-full" : "w-auto"}
        ${className}
      `}
        >
            {isLoading ? (
                <>
                    <Spinner />
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {leftIcon && <span className="flex items-center">{leftIcon}</span>}
                    {children}
                    {rightIcon && <span className="flex items-center">{rightIcon}</span>}
                </>
            )}
        </button>
    );
};


const Spinner = () => {
    return (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
    );
};
