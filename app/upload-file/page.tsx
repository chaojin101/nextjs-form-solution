"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UploadFileForm, UploadFileFormSchema } from "../_types/upload-file";
import axios from "axios";

export default function Page() {

    const { register, handleSubmit } = useForm<UploadFileForm>({
        resolver: zodResolver(UploadFileFormSchema),
    })

    const onSubmit = async (data: UploadFileForm) => {
        console.log(data)

        const formData = new FormData()
        for (let i = 0; i < data.files.length; i++) {
            const file = data.files[i]
            formData.append('files', file)
        }
        const resp = await axios.post('/api/upload-file', formData)
        console.log(resp)
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-4">
            <label>Upload files</label>
            <input type="file" {...register('files')} multiple />
            <button type="submit">Submit</button>
        </form>
    </>
}