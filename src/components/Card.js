import React, { useState }  from 'react'
import { FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast} from 'react-toastify';
function Card({data}) {
  const [like, setLike]=useState(false)
  function clickHandler(){
    if(like){
      toast.warning("Like removed")
    }else{
      toast.success("Liked Successfully")
    }
    setLike(!like);
  }
  return (
    <div className='card relative w-80 bg-slate-600  rounded-lg overflow-hidden border-4 pb-2 hover:scale-105 hover:border-blue-600 transition-all duration-500 ease-in-out' >
        <div className='w-full'>
            <img src={data.image.url} alt='img'></img>
        </div>
        <div className='absolute flex justify-center items-center w-10 h-10 rounded-full bg-slate-300 p-2 right-1 top-40'>
            <button className='text-3xl' onClick={clickHandler}>{like ? (<FcLike/>):(<FcLikePlaceholder/>)}</button>
        </div>
        <h1 className='p-2 font-bold text-lg text-green-500'>{data.title}</h1>
        <div className='px-3 text-white text-justify font-semibold'>
            {
              data.description.length>150 ?(data.description.substr(0,150))+"...":(data.description)
            }
        </div>

    </div>
  )
}

export default Card