import React from 'react'

function Spinner() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-[100vh] w-full'>
        <span className='loader -top-24'></span>
    
        <p className='font-semibold'>Loading....</p>
    </div>
  )
}

export default Spinner;