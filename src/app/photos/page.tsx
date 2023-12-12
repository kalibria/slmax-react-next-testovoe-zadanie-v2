import getPhotos from "@/app/photos/getPhotos"
import Image from 'next/image';
import {IImage} from 'src/app/interfaces/interfaces';

const Photos = async () => {
 const photos:IImage[] = await getPhotos();



 const imgSection = photos.map(img => {
   return <Image src={img.urls.small} width={500} height={500} alt={img.description} key={img.id}/>
 })

  return (
    <div>
      {imgSection}
    </div>
  )
}
 export default Photos;
