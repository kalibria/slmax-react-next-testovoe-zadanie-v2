'use client'
import { useRouter } from "next/navigation";
import { auth } from "@/app/auth/authManager";
import PhotosPage from "@/app/photos/PhotosPage";


const PhotosWrapper = () => {
  const router = useRouter();

  return (
    <div className={'w-full p-4 relative'}>
      {auth.isAuth() ? <PhotosPage/> : router.push('/')

      }

    </div>
  )
}
 export default PhotosWrapper;
