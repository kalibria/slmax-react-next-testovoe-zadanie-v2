import { CATEGORY } from "@/app/constants/constants";

const CategorySection = () =>{

  return (
    CATEGORY.map((category)=>{
      return <div key={category}><p>{category}</p></div>
    })

  )
}

export default CategorySection;
