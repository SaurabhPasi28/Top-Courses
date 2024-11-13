import React from 'react'
import fillterData from '../JsonData/filterData'

function Header(props) {
  let category=props.category;
  let setCategory=props.setCategory;

  function fillterHandler(title){
    setCategory(title);
  }

  return (
    <header className='w-full'>
        <div className='w-full text-center p-2 font-bold text-3xl  text-white bg-slate-500 mb-6'>
            <h1>Top Courses</h1>
        </div>
        <div className='flex justify-center gap-1 sm:gap-3 sm:m-3  text-white font-semibold'>
          {fillterData.map((data)=>{
              return(
                <button className={`px-1 sm:px-3 p-0.5 sm:p-1 bg-blue-600 rounded-md border-2 hover:bg-blue-800 ${category ===data.title ? "border-white" : "border-transparent"}`} key={data.id} onClick={()=>fillterHandler(data.title)}>
                  {data.title}
                </button>
              )
            })
          }
        </div>
    </header>
  )
}

export default Header