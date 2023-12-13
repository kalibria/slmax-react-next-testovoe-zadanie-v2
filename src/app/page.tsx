import Link from "next/link";
import AuthForm from "@/app/auth/AuthForm";

export default function Home() {
  return (
    <main>
      <div className={'border-2 border-blue-300 rounded-full p-1.5 px-2  hover:bg-blue-50 w-28 text-center my-3 mx-auto'}>
        <Link href={'/photos'} >PHOTOS</Link>
      </div>
      <AuthForm />

    </main>
  )
}
