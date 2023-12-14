'use client'
import Image from 'next/image';
import {useEffect, useState} from 'react';
import {
  COUNT_PHOTOS_ON_PAGE,
  INIT_TOTAL_PHOTOS
} from "@/app/constants/constants";
import CategorySection from "@/app/categorySection/CategorySection";
import LogOut from "@/app/auth/LogOut";
import {IImage, ResponseFromGetPhotos} from 'src/app/interfaces/interfaces';
import PaginationOutlined from '@/app/pagination/Pagination';
import getPhotos from '@/app/photos/getPhotos';
import SortingSection from "@/app/sortingSection/SortingSection";
import Like from "@/app/myCollection/Like";
import LikedCollection from "@/app/myCollection/LikedCollection";


const Photos = () => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<IImage[]>([]);
  const [totalPhotos, setTotalPhotos] = useState(INIT_TOTAL_PHOTOS);
  const [perPage, setPerPage] = useState(COUNT_PHOTOS_ON_PAGE);


  useEffect(()=>{
    getPhotos(page).then((photos:ResponseFromGetPhotos) => {setPhotos(photos.photos);
      setPerPage(photos.perPage);
      setTotalPhotos(photos.totalPhotos)
    })

  },[page, perPage, totalPhotos])



 const imgSection = photos.map(img => {
   return <div key={img.id} className={'relative'}>
     <Like imgId={img.id}/>
     <Image src={img.urls.small} width={500} height={500} alt={img.description}  className={'object-cover h-96'}/>
   </div>

 })

  return (
    <div className={'w-full p-4 relative'}>
      <LogOut/>
      <h1 className={'text-xl font-bold italic text-center p-4 pb-0'}>Photos</h1>
      <PaginationOutlined setPage={setPage} totalPhotos={totalPhotos} perPage={perPage}/>
      <CategorySection setPhotos={setPhotos}/>
      <SortingSection setPhotos={setPhotos}/>
      <LikedCollection/>
      <div className={"w-11/12 my-0 mx-auto grid grid-cols-3 gap-2"}>
        {imgSection}
      </div>

    </div>
  )
}
 export default Photos;
