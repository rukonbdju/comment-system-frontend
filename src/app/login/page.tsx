
import LoginForm from "@/components/auth/login-form"
import { Lock } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: 'Login'
}
const LoginPage = () => {
    return (
        <div className="bg-indigo-50 min-h-screen content-center">
            <div className="max-w-md bg-white mx-auto p-5 rounded-xl">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        <Lock size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
                    <p className="text-slate-500 mt-2 text-sm">
                        Sign in to join the conversation
                    </p>
                </div>
                <LoginForm />
                <p className="mt-4 text-sm">New user? <Link className="text-indigo-500 hover:underline font-semibold" href={'/register'}>Registration</Link></p>
            </div>
        </div>
    )
}

export default LoginPage