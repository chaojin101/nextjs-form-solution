"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { RegisterForm, RegisterFormSchema, RegisterReqSchema } from "@/app/_types/register"

export default function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
        resolver: zodResolver(RegisterFormSchema),
    })

    const onSubmit = async (data: RegisterForm) => {
        console.log(data)

        const result = RegisterReqSchema.safeParse(data)
        if (!result.success) {
            return
        }
        await axios.post('/api/register', result.data)
    }

    return <>
        <div className="max-w-screen-sm mx-auto mt-8 px-8 transition">
            <h1 className="text-2xl">Register</h1>
            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
                <div className="form-entry">
                    <label>Confirmed Password</label>
                    <input type="password" placeholder="Confirmed Password" {...register('confirmedPassword')} />
                    {errors.confirmedPassword && <span className="error-msg">{errors.confirmedPassword.message}</span>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    </>
}