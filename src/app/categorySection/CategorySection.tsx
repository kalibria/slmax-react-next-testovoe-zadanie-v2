import { CATEGORY } from "@/app/constants/constants";

const CategorySection = () => {
  const categoryList = CATEGORY.map((category)=>{
    return <li key={category} className={'border-2 border-blue-300 rounded-full p-1.5 px-2 hover:border-blue-500'}>{category}</li>
  })
  return (<nav className={'max-w-4xl my-1 mx-auto'}>
        <ul className={'flex justify-around '}>
           {categoryList}
        </ul>
    </nav>
  )
}

export default CategorySection;
