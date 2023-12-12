import getPhotos from "@/app/photos/getPhotos"
import Image from 'next/image';
import {IImage} from 'src/app/interfaces/interfaces';

const Photos = async () => {
 const photos:IImage[] = await getPhotos();



 const imgSection = photos.map(img => {
   return <div>
     <Image src={img.urls.small} width={500} height={500} alt={img.description} key={img.id} className={'object-cover h-96'}/>
   </div>

 })

  return (
    <div>
      <h1>Photos</h1>
      <div className={"w-screen grid grid-cols-3 gap-2"}>
        {imgSection}
      </div>

    </div>
  )
}
 export default Photos;
