import { LoginReqSchema } from "@/app/_types/login";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json();

    const result = LoginReqSchema.safeParse(data);
    if (!result.success) {
        return NextResponse.json(result.error, { status: 400 });
    }
    return NextResponse.json(data);
}