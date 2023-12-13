import { LIMIT_FOR_SEARCH_REQUEST } from "@/app/constants/constants";
import { ResponseFromCategorySection } from "@/app/interfaces/interfaces";

const getPhotoWithCategory = async (category:string): Promise<ResponseFromCategorySection> =>{
  const res = await fetch(`https://api.unsplash.com/search/photos?query=${category}&per_page=${LIMIT_FOR_SEARCH_REQUEST}`,{
    headers: {Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`}
  })

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}


export default getPhotoWithCategory;
