import { COUNT_PHOTOS_ON_PAGE } from "@/app/constants/constants";
import { IImage } from "@/app/interfaces/interfaces";

const getSortedPhoto =async (orderBy:string): Promise<IImage> =>{
  const res = await fetch(`https://api.unsplash.com/photos?per_page=${COUNT_PHOTOS_ON_PAGE}&order_by=${orderBy}`,{
    headers: {Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`}
  })

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

export default getSortedPhoto;
