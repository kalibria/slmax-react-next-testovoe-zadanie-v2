'use client'
import Image from "next/image";
import getPhotoDyId from "@/app/myCollection/getPhotoDyId";
import { likeListManager } from "@/app/myCollection/likeListManager";
import { useEffect, useState } from "react";
import { IImage } from "@/app/interfaces/interfaces";

const MyCollection = () => {
  const idLikedPhotos = likeListManager.getCurrentLikedList();
  console.log("idLikedPhotos", idLikedPhotos)

  const [likedPhotos, setLikedPhotos] = useState<IImage[]>([]);

  useEffect(()=>{
    async function fetchPhotos(){
      const photosPromises = idLikedPhotos.map( (id)=>{
        return getPhotoDyId(id)
      });

      const photos = await Promise.all(photosPromises);

      setLikedPhotos(photos)
    }
    fetchPhotos();

  },[])


  const collectionSection = likedPhotos.map(img => {
    return <div key={img.id} className={'relative'}>
      <Image src={img.urls.small} width={500} height={500} alt={img.description}  className={'object-cover h-96'}/>
    </div>

  })



  return (
    <div className={'w-full p-4'}>
      <h1 className={'text-xl font-bold italic text-center p-4 pb-0 mb-6' }>MY COLLECTION</h1>
      <div className={"w-11/12 my-0 mx-auto grid grid-cols-3 gap-2"}>
        {collectionSection}
      </div>

    </div>
  )
}

export default MyCollection;
