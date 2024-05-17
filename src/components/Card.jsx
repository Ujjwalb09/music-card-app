import React from 'react'

function Card({image, name, artist, added}) {
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-10'>
        <div className='w-20 h-20 bg-orange-600 rounded-md'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div>
            <h3 className='text-l leading-none font-semibold'>{name}</h3>
            <h6 className='text-sm'>{artist}</h6>
        </div>
        <button className='whitespace-nowrap px-4 py-3 bg-orange-600 absolute  text-white text-xs rounded-full bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]'>{added == false ? "Add to favourites" : "Added"}</button>
    </div>
  )
}

export default Card