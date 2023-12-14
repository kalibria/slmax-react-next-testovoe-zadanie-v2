import { IImage } from "src/app/interfaces/interfaces";

const getPhotoDyId =async (id:string):Promise<IImage> =>{
  const res = await fetch(`https://api.unsplash.com/photos/${id}`,{
    headers: {Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`}
  })


  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }


  return  await res.json()
}

export default getPhotoDyId;
