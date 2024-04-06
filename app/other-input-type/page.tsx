"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Gender, Language, OtherInputTypeForm, OtherInputTypeFormSchema } from "@/app/_types/other-input-type"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import axios from "axios"

export default function Page() {
    const { register, handleSubmit, formState: { errors }, control } = useForm<OtherInputTypeForm>({
        resolver: zodResolver(OtherInputTypeFormSchema),
    })

    const onSubmit = async (data: OtherInputTypeForm) => {
        console.log(data)

        const result = await axios.post("/api/other-input-type", data)
        console.log(result)
    }

    return <>
        <div className="max-w-screen-sm mx-auto px-4">
            <h1 className="mt-8">Other input type examples</h1>
            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <h2 className="bg-pink-300">Checkbox example:</h2>
                    <div className="flex gap-2">
                        <input type="checkbox" {...register("tosIsRead")} />
                        <label>I have read terms of service</label>
                    </div>
                    {errors && <span className="error-msg">{errors.tosIsRead?.message}</span>}
                </div>

                <div>
                    <h2 className="bg-pink-300">Radio button example:</h2>
                    <div className="flex flex-col">
                        <label>Gender:</label>
                        <div className="flex gap-2">
                            <label>Male</label>
                            <input type="radio" value={Gender.Values.male} {...register("gender")} />
                        </div>
                        <div className="flex gap-2">
                            <label>Female</label>
                            <input type="radio" value={Gender.Values.female} {...register("gender")} />
                        </div>
                        <div className="flex gap-2">
                            <label>Other</label>
                            <input type="radio" value={Gender.Values.other} {...register("gender")} />
                        </div>
                    </div>
                    {errors && <span className="error-msg">{errors.gender?.message}</span>}
                </div>

                <div>
                    <h2 className="bg-pink-300">Select example:</h2>
                    <div className="flex gap-2">
                        <label>Your favorite programming language</label>
                        <select {...register("language")}>
                            <option value="">Select an item</option>
                            <option value={Language.Values.Javascript}>Javascript</option>
                            <option value={Language.Values.Python}>Python</option>
                            <option value={Language.Values.C}>C</option>
                        </select>
                    </div>
                    {errors && <span className="error-msg">{errors.language?.message}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
        <DevTool control={control} />
    </>
}