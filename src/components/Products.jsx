import React, { useState, useRef } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video4.mp4";


const Products = () => {
    var products = [
        { title: "Arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false },
        { title: "Cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false },
        { title: "Layout Land", description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live: true, case: true },
        { title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false }
    ];

    const [pos, setPos] = useState(0);

    // Create refs for each video
    const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    function mover(val) {
        setPos(val * 20);
    }

    const handleMouseEnter = (index) => {
        if (videoRefs[index].current) {
            videoRefs[index].current.play();
        }
    };

    const handleMouseLeave = (index) => {
        if (videoRefs[index].current) {
            videoRefs[index].current.pause();
            videoRefs[index].current.currentTime = 0; // Optional: reset video to start
        }
    };

    return (
        <div className='mt-32 relative'>
            {
                products.map((val, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <Product
                            val={val}
                            mover={mover}
                            count={index}
                        />
                    </div>
                ))
            }
            <div className='absolute top-0 w-full h-full pointer-events-none '>
                <motion.div
                    initial={{ y: pos, x: "-50%" }}
                    animate={{ y: pos + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                    className='window absolute w-[32rem] h-[20rem] bg-white left-[40%] overflow-hidden '
                >
                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className='w-full h-full bg-blue-100  '
                    >
                        <video ref={videoRefs[0]} src={video3} type="video/mp4" muted></video>
                    </motion.div>
                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className='w-full h-full bg-blue-200 '
                    >
                        <video ref={videoRefs[1]} src={video2} type="video/mp4" muted></video>
                    </motion.div>
                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className='w-full h-full bg-blue-300 '
                    >
                        <video ref={videoRefs[2]} src={video1} type="video/mp4" muted></video>
                    </motion.div>
                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className='w-full h-full bg-blue-400 '
                    >
                        <video ref={videoRefs[3]} src={video4} type="video/mp4" muted></video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Products;
