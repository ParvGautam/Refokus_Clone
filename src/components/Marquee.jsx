import React from 'react'
import {motion} from "framer-motion"

const Marquee = ({image,duration}) => {
  return (
    <div className='flex w-full overflow-hidden'>
        <motion.div initial={{x: duration==="left" ? "0" : "-100%"}} animate={{x:duration==="left" ? "-100%" :"0"}} transition={{repeat:Infinity, ease: "linear", duration: 10}} className='flex flex-shrink-0 gap-20 py-10 pr-10'>
        {image.map((url,index)=> <img key={index} className='w-24' src={url} />)}
        </motion.div>
        <motion.div initial={{x: duration==="left" ? "0" : "-100%"}} animate={{x:duration==="left" ? "-100%" :"0"}} transition={{repeat:Infinity, ease: "linear", duration: 10}} className='flex flex-shrink-0 gap-20 py-10 pr-10'>
        {image.map((url,index)=> <img key={index} className='w-24' src={url} />)}
        </motion.div>
    </div>
  )
}

export default Marquee