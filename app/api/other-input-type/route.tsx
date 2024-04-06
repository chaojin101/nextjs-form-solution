import { OtherInputTypeReqSchema } from "@/app/_types/other-input-type";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    req.formData()
    const data = await req.json()
    console.log(data)

    const result = OtherInputTypeReqSchema.safeParse(data)
    if (!result.success) {
        return NextResponse.json(result.error, { status: 400 })
    }

    return NextResponse.json(result.data)
}