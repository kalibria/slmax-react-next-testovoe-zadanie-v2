'use client'
import Image from 'next/image';
import {useEffect, useState} from 'react';
import { COUNT_PHOTOS_ON_PAGE } from "@/app/constants/constants";
import {IImage, ResponseFromGetPhotos} from 'src/app/interfaces/interfaces';
import PaginationOutlined from '@/app/pagination/Pagination';
import getPhotos from '@/app/photos/getPhotos';


const Photos = () => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<IImage[]>([]);
  const [totalPhotos, setTotalPhotos] = useState(120);
  const [perPage, setPerPage] = useState(COUNT_PHOTOS_ON_PAGE);


  useEffect(()=>{
    getPhotos(page).then((photos:ResponseFromGetPhotos) => {setPhotos(photos.photos);
      setPerPage(Number(photos.perPage));
      setTotalPhotos(Number(photos.totalPhotos))
    })

    console.log("totalPhotos", totalPhotos)
    console.log("perPage", perPage)
  },[page, perPage, totalPhotos])



 const imgSection = photos.map(img => {
   return <div key={img.id}>
     <Image src={img.urls.small} width={500} height={500} alt={img.description}  className={'object-cover h-96'}/>
   </div>

 })

  return (
    <div>
      <h1 className={'text-xl font-bold italic text-center p-4'}>Photos</h1>
      <PaginationOutlined setPage={setPage} totalPhotos={totalPhotos} perPage={perPage}/>
      <div className={"w-screen grid grid-cols-3 gap-2"}>
        {imgSection}
      </div>

    </div>
  )
}
 export default Photos;
