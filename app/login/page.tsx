"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { LoginForm, LoginFormSchema } from "@/app/_types/login"

export default function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(LoginFormSchema),
    })

    const onSubmit = async (data: LoginForm) => {
        console.log(data)
        await axios.post('/api/login', data)
    }

    return <>
        <div className="max-w-screen-sm mx-auto mt-8 px-8 transition">
            <h1 className="text-2xl">Login</h1>
            <form className="mt-2 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-entry">
                    <label>Email</label>
                    <input type="text" placeholder="Email" {...register('email')} />
                    {errors.email && <span className="error-msg">{errors.email.message}</span>}
                </div>
                <div className="form-entry">
                    <label>Password</label>
                    <input type="password" placeholder="Password" {...register('password')} />
                    {errors.password && <span className="error-msg">{errors.password.message}</span>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </>
}