import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";


const Card = ({width,start,hover}) => {
  return (
    <div className={` bg-zinc-800 p-5 rounded-xl ${width} hover:${hover}  min-h-[30rem] flex flex-col  justify-between`}>
        <div className='w-full'>
            <div className='flex items-center justify-between'>
                <h3>Up Next: Culture</h3>
                <MdArrowRightAlt />
            </div>
            <h1 className='text-3xl font-medium mt-5'>Who We Are</h1>

        </div>
        <div className='down w-full mt-60'>
            {
                start ? (
                    <>
                        <h1 className='text-6xl leading-none tracking-tight font-semibold '>Start A Project</h1>
                        <button className='rounded-full py-2 px-5 border-[1px] mt-5 border-zinc-100'>Contact Us</button>
                    </>
                ):
                <p className='text-sm text-zinc-400 font-medium '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam odit .</p>
            }
            
        </div>

    </div>
  )
}

export default Card