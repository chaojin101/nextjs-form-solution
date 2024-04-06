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
    <div className="flex flex-col gap-3">

      {links.map(link => <Link key={link} href={link} className="text-xl">{link}</Link>)}

    </div>
  </>
}
