import { useRouter } from "next/navigation";

const LikedCollection =() =>{
  const router = useRouter();

  const handleClick = () =>{
    router.push('/myCollection')
  }
  return (
    <div className={'flex justify-center'}>
      <button className={'border-2 border-blue-300 rounded-full p-1.5 px-2  hover:bg-blue-50 mb-6 '} onClick={handleClick}>My collection</button>
    </div>

  )
}

export default LikedCollection;
