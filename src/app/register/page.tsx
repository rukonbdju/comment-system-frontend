
import { Button } from "@/components/shared-components/button"
import { InputField } from "@/components/shared-components/input"
import { Lock, Mail, MoveRight, User } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: 'Register'
}
const RegisterPage = () => {
    return (
        <div className="bg-indigo-50 min-h-screen content-center">
            <div className="max-w-md bg-white mx-auto p-5 rounded-xl">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        <Lock size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Register Now</h1>
                    <p className="text-slate-500 mt-2 text-sm">
                        Registration first to join the conversation
                    </p>
                </div>
                <form className=" space-y-4">
                    <InputField
                        icon={<User className="size-4" />}
                        label="Name"
                        name="name"
                        type="text"
                    />
                    <InputField
                        icon={<Mail className="size-4" />}
                        label="Email"
                        name="email"
                        type="email"
                    />
                    <InputField
                        icon={<Lock className="size-4" />}
                        label="Password"
                        name="password"
                        type="password"
                    />
                    <Button rightIcon={<MoveRight />} block={true} isLoading={false}>Register</Button>
                </form>
                <p className="mt-4 text-sm">ALready register? <Link className="text-indigo-500 hover:underline font-semibold" href={'/login'}>Login</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage