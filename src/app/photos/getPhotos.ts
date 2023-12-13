import {COUNT_PHOTOS_ON_PAGE} from '../constants/constants';


 const getPhotos = async (page:number) =>{
  const res = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=${COUNT_PHOTOS_ON_PAGE}`,{
    headers: {Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`}
  })



  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const totalPhotos = res.headers.get('X-Total');
  const perPage = res.headers.get('X-Per-Page');
  const photos = await res.json();



  return  {photos, totalPhotos, perPage}

}

export default getPhotos;
