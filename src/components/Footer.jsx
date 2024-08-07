import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mmx-auto py-10 flex gap-10'>
            <div className='basis-1/2'>
            <h1 className='text-[12rem] leading-none tracking-tight font-semibold '>refokus.</h1>
            </div>


            <div className='basis-1/2 flex gap-5'>
            <div className='basis-1/3 '>
                <h4 className='mb-10'>Socials</h4>
                {["Instagram", "Twitter", "LinkedIn",].map((item,index)=><a className='block mt-2 capitalize text-zinc-500'>{item}</a>)}
            </div>
            <div className='basis-1/3 '>
                <h4 className='mb-10'>Socials</h4>
                {["Instagram", "Twitter", "LinkedIn",].map((item,index)=><a className='block mt-2 capitalize text-zinc-500'>{item}</a>)}
            </div>
            <div className='basis-1/2 flex flex-col items-end text-right'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, inventore!</p>
                <img className=' mt-10' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6653351b3ab3236cb452f2f3_Frame%2048097733.svg" alt="" />
            </div>
            </div>

        </div>

    </div>
  )
}

export default Footer