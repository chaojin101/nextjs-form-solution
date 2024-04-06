"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function Home() {
  const links = ['/login', '/register', '/other-input-type', '/upload-file']
  return <>
    <div className="max-w-screen-sm mx-auto mt-10 px-8 py-6 flex flex-col gap-3 bg-blue-300 rounded">

      {links.map(link => <Link key={link} href={link} className="px-4 py-2 text-xl underline bg-pink-300 rounded">{link}</Link>)}

    </div>
  </>
}
