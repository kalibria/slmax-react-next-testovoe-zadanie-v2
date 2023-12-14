import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { likeListManager } from "@/app/likeList/likeListManager";


const Like =({imgId}) =>{
  const [color, setColor] = useState('white')
  const handleClick = (event) =>{
    if(color=='white'){
      setColor('red');
      likeListManager.setLikePhoto(imgId)
    }else {
      console.log("removeImg", imgId)
      setColor('white');
      likeListManager.removeLikedPhoto(imgId)
    }
  }
  return (
    <div className={'absolute top-1.5 right-1.5'}>
      <IoMdHeart color={color} onClick={handleClick} />
    </div>
  )
}

export default Like;
