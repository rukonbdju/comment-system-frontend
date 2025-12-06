
import { Button } from "@/components/shared-components/button"
import { InputField } from "@/components/shared-components/input"
import { Lock, Mail, MoveRight } from "lucide-react"

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
                <form className=" space-y-4">
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
                    <Button rightIcon={<MoveRight />} block={true} isLoading={false}>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage