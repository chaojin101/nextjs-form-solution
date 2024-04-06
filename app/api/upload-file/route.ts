import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs/promises";
import path from "path";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData()
  const files = formData.getAll("files")
  for (const file of files) {
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Invalid file" }, { status: 400 })
    }
    const buffer = Buffer.from(await file.arrayBuffer())
    const dirpath = path.join('public', 'static')
    const filepath = path.join(dirpath, file.name)
    await fs.mkdir(dirpath, { recursive: true })
    await fs.writeFile(filepath, buffer)
  }
  return NextResponse.json({ success: true })
}