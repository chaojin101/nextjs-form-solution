import { RegisterReqSchema } from "@/app/_types/register";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    console.log(data)

    const result = RegisterReqSchema.safeParse(data)
    if (!result.success) {
        return NextResponse.json(result.error, { status: 400 })
    }
    return NextResponse.json(result.data)
}