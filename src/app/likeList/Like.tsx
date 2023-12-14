import { useState } from "react";
import { IoMdHeart } from "react-icons/io";

const Like =() =>{
  const [color, setColor] = useState('white')
  const handleClick = () =>{
    if(color=='white'){
      setColor('red')
    }else {
      setColor('white')
    }


  }
  return (
    <div className={'absolute top-1.5 right-1.5'}>
      <IoMdHeart color={color} onClick={handleClick} />
    </div>
  )
}

export default Like;
