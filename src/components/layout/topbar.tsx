'use client'
import { LogOut, MessageSquare } from "lucide-react";
import Avatar from "../shared-components/avatar";
import { useSelector } from "react-redux";
import { authSelector, clearUser } from "@/lib/features/auth/auth.slice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { baseURL } from "@/utils/base-url";
import { useRouter } from "next/navigation";

const TopBar = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { user } = useSelector(authSelector)
    const handleLogout = async () => {
        try {
            const res = await fetch(`${baseURL}/auth/logout`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
            const result = await res.json()
            console.log(result)
            if (result.success) {
                dispatch(clearUser())
                router.push('login')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-full bg-white shadow-lg sticky top-0 z-10">
            <div className="max-w-4xl mx-auto flex justify-between items-center h-16 px-4">
                <div className="text-xl font-bold text-indigo-600 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2" />
                    Comment App
                </div>

                {/* Always display the logged-in user details */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="flex flex-col text-right">
                            <span className="text-xs text-gray-500 font-semibold">{user?.name}</span>
                            <span className="text-xs text-gray-500 font-semibold">{user?.email}</span>
                        </div>
                        <Avatar size={40} name={user?.name || ""} />
                        <button onClick={handleLogout} className="bg-red-50 p-2.5 rounded hover:bg-red-100 text-red-600">
                            <LogOut className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;