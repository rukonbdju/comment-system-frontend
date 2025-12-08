'use client';
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { authSelector } from "@/lib/features/auth/auth.slice";
import { getLoggedInUser } from "@/lib/features/auth/auth.thunks";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedPage = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch()
    const { isLoading, user } = useSelector(authSelector)
    console.log(user)
    const router = useRouter()
    useEffect(() => {
        if (!user) dispatch(getLoggedInUser())
    }, [user, dispatch])

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace("/login"); // redirect if not authenticated
        }
    }, [isLoading, user, router]);

    if (isLoading || !user) {
        return (
            <div className="flex items-center justify-center h-screen">
                Loading...
            </div>
        );
    }

    return <>{children}</>;
}

export default ProtectedPage;