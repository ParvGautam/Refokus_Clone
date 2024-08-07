import React from 'react'
import Button from './Button'

const Product = ({val,mover,count}) => {
  return (
    <div className='w-full h-[20rem] py-20 px-10 text-white  '>
        <div onMouseOver={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between  '>
        <h1 className='text-5xl font-medium capitalize'>{val.title}</h1>
        <div className='w-1/3'>

        <p className='mb-10'>{val.description}</p>
        <div className='flex gap-5 items-center'>
            {val.live && (<Button title={"Live Website"}/>) }
            {val.case && (<Button title={"Case Study"} />) }
        </div>
        </div>
        </div>
    </div>
  )
}

export default Product