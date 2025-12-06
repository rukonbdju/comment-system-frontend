import React from "react";

// Reusable Input Field Component
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: React.ReactNode;
    label: string;
}

export const InputField: React.FC<InputFieldProps> = ({ icon, label, ...props }) => {
    return (
        <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    {icon}
                </div>
                <input
                    {...props}
                    className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition disabled:cursor-not-allowed"
                />
            </div>
        </div>
    );
};