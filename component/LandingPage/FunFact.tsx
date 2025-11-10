'use client'
import { Images } from '@/assets/png'
import { Leaf, Leaf2 } from '@/assets/svg'
import { motion, useMotionValueEvent, useSpring, useTransform } from 'motion/react'
import { useScroll } from 'motion/react'
import Image from 'next/image'
import React, { useRef } from 'react'

const FunFact = () => {

  const pageRef = useRef(null)
  const { scrollYProgress} = useScroll({
    target: pageRef,
    offset: ['start start', 'end start']
  })

  const expressiveSpatial = {
    stiffness: 170,  
    damping: 25,    
    mass: 0.8,  
  };

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('scrollYProgress for fun fact', latest)
  })


  return (
    <motion.div 
    className='h-[200vh] mt-12 '
    ref={pageRef}
    >
      <motion.div 
      className='h-screen bg-[#ddd7c6] sticky top-0 flex flex-col items-center space-y-20 justify-center py-24 px-4'
      style={{
        // borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.6], [72, 24, 24, 16,  0]),
        // borderTopRightRadius: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.6 ], [72, 24, 24, 16, 0]),
        // background: useTransform(scrollYProgress, [0, 0.1111], ['#141414', '#faeadc'])
        
        
      }}
      >
        {/* <motion.div
        className=''
          transition={{
            type: 'spring',
            ease: 'backIn'
          }}
          style={{
            y: useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 400]), expressiveSpatial),
            x: useSpring(useTransform(scrollYProgress, [0, 0.3 ], [0, 23]), expressiveSpatial),
            rotate: useTransform(scrollYProgress, [0, 0.2, 0.3,], [0, -180, -scrollYProgress]),
            opacity: useSpring(useTransform(scrollYProgress, [0.26, 0.28], [1, 0]), expressiveSpatial),
            
          }}
        >
          <Leaf className={' scale-90'}/>
        </motion.div> */}

        <motion.div 
        className='text-xs flex flex-col items-center '
        style={{
          // opacity: useTransform(scrollYProgress, [0.72, 0.75], [0, 1]),
          // color: useTransform(scrollYProgress, [0, 0.1111], ['#fdf9f0', '#141414'])
        }}
        
        >
          <p className='font-bold'>Here's a fun fact:</p>
          <p>We build a lot here.</p>
        </motion.div>

        <div className="relative flex-1 ">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={Images.Quote}
              alt="background"
              width={300}
              height={300}
              className=" max-w-none"
            />
          </div>
          <motion.div
            className="relative z-10 px-4"
            style={{
              opacity: useTransform(scrollYProgress, [0.31, 0.36], [0, 1]),
            }}
          >
            <p className="text-center font-champBlack text-3xl">
            Code changes nothing until it runs; ideas changes nothing until it’s built.
            </p>
          </motion.div>

        </div>



        <div className='flex items-center gap-x-6 self-end pb-8 text-brand-black'>
          <motion.div
            style={{
              // color: useTransform(scrollYProgress, [0, 0.1111], ['#fdf9f0', '#141414'])
            }}
          >
            <p className='text-xs font-semibold'>Sun Tzu</p>
            <p className='text-xs'>The Author of the  Art<br/> of War</p>
          </motion.div>
          <Image 
            src={Images.Suntzu}
            width={48}
            height={48}
            alt='suntzu'
          />
        </div>


      </motion.div>

    </motion.div>
  )
}

export default FunFact