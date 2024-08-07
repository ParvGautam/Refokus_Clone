import React from 'react'

const Marquee = ({image}) => {
  return (
    <div className='flex w-full py-5 gap-10 whitespace-nowrap overflow-hidden'>
        {image.map((url)=> <img className='w-24' src={url} />)}
        {image.map((url)=> <img className='w-24' src={url} />)}
    </div>
  )
}

export default Marquee