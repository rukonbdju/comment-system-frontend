'use client'
import { Button } from "@/components/shared-components/button"
import { InputField } from "@/components/shared-components/input"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { setUser } from "@/lib/features/auth/auth.slice"
import { baseURL } from "@/utils/base-url"
import { Lock, Mail, MoveRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const metadata = {
    title: 'Login'
}
const LoginForm = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch(`${baseURL}/auth/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const result = await res.json()
            if (result.success) {
                dispatch(setUser(result.data))
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={handleLogin} className=" space-y-4">
            <InputField
                icon={<Mail className="size-4" />}
                value={formData.email}
                onChange={onInputChange}
                label="Email"
                name="email"
                type="email"
                required
            />
            <InputField
                icon={<Lock className="size-4" />}
                value={formData.password}
                onChange={onInputChange}
                minLength={6}
                label="Password"
                name="password"
                type="password"
                required
            />
            <Button className="cursor-pointer" disabled={loading} type="submit" rightIcon={<MoveRight />} block={true} isLoading={false}>Login</Button>
        </form>
    )
}

export default LoginForm;