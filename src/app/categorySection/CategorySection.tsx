import { CATEGORY } from "@/app/constants/constants";
import getPhotoWithCategory from "@/app/categorySection/getPhotoWithCategory";

const CategorySection = ({setPhotos}) => {
  const handleClick = async (event, category) =>{

    const newPhotos = await getPhotoWithCategory(category)

    setPhotos(newPhotos.results);

  }

  const categoryList = CATEGORY.map((category)=>{
    return <button key={category} name={category} className={'border-2 border-blue-300 rounded-full p-1.5 px-2  hover:bg-blue-50'} onClick={(event) => handleClick(event, category)}>{category}</button>
  })
  return (<nav className={'max-w-2xl my-0 mx-auto mb-5'}>
        <div className={'flex justify-around '}>
           {categoryList}
        </div>
    </nav>
  )
}

export default CategorySection;
