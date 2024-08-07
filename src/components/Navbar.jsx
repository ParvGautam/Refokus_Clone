import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl  p-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700'>
        <div className='nleft flex items-center'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='links flex gap-14 ml-20  '>
            {["Home","Work","Culture","","News"].map((elem,index)=><a className='text-sm flex items-center gap-1'>
                {index===1 ? (<span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block font-regular w-1 h-1 rounded-full bg-green-500'></span>): null}
                {elem.length===0 ? (<span  className='inline-block w-[1px] h-6 bg-zinc-700'></span>) : null}
                {elem}
                
                </a>)}
        </div>
        </div>
        <Button title={"Start a Project"} />
    </div>
  )
}

export default Navbar