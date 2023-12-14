import { useRouter } from "next/navigation";
import { auth } from "@/app/auth/authManager";

const LogOut =() =>{
  const router = useRouter();

  const handleClick =() =>{
      auth.logOut();
      router.push('/')
  }

  return (
    <div>
      <button className={'border-2 border-blue-300 rounded-full p-1.5 px-2  hover:bg-blue-50 absolute top-1.5  right-10'} onClick={handleClick}>LOG OUT</button>
    </div>
  )
}

export default LogOut;
