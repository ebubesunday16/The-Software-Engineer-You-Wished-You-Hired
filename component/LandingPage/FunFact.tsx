'use client'
import { Images } from '@/assets/png'
import { Leaf, Leaf2 } from '@/assets/svg'
import { motion, useMotionValueEvent, useTransform } from 'motion/react'
import { useScroll } from 'motion/react'
import Image from 'next/image'
import React, { useRef } from 'react'

const FunFact = () => {

  const pageRef = useRef(null)
  const { scrollYProgress} = useScroll({
    target: pageRef,
    offset: ['start end', 'end end']
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('scrollYProgress for fun fact', latest)
  })


  return (
    <motion.div 
    className='h-[300vh] '
    ref={pageRef}
    >
      <motion.div 
      className='h-screen bg-[#faeadc] rounded-t-[16px] sticky top-0 flex flex-col items-center space-y-16 justify-center  px-4'
      style={{
        borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [72, 24, 16, 0]),
        borderTopRightRadius: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [72, 24, 16, 0]),
      }}
      >
        <motion.div
        className=''
          transition={{
            type: 'spring',
            ease: 'backIn'
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], [50, 400]),
            x: useTransform(scrollYProgress, [0.20, 0.4 ], [0, 23]),
            rotate: useTransform(scrollYProgress, [0, 0.2, 0.5, 0.67], [0, -30, 50, 30]),
            opacity: useTransform(scrollYProgress, [0.55, 0.57], [1, 0]),
            
          }}
        >
          <Leaf className={' scale-90'}/>
        </motion.div>

        <motion.div 
        className='text-sm '
        style={{
          opacity: useTransform(scrollYProgress, [0.72, 0.75], [0, 1])
        }}
        
        >
          <p className='font-semibold'>Here's a fun fact:</p>
          <p>I close that gap</p>
        </motion.div>

        <div className="relative ">
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
              opacity: useTransform(scrollYProgress, [0.58, 0.63], [0, 1]),
            }}
          >
            <p className="text-center font-champBlack text-3xl">
              The greatest gap is not between ignorance and knowledge, but between knowledge and action.
            </p>
          </motion.div>

        </div>



        <div className='flex items-center gap-x-6 self-end'>
          <div>
            <p className='text-sm font-semibold'>Sun Tzu</p>
            <p className='text-xs'>The Author of the  Art<br/> of War</p>
          </div>
          <Image 
            src={Images.Suntzu}
            width={69}
            height={77}
            alt='suntzu'
          />
        </div>

        <motion.div
        style={{
          rotate: useTransform(scrollYProgress, [0.71, 0.72, 0.73, 0.74, 0.8, 0.81], [20, -5, 15, 0, 0, -5]),
          opacity: useTransform(scrollYProgress, [0.65, 0.7], [0, 1]),
        }}
        
        >
          <Leaf className={'-rotate-60 '}/>
        </motion.div>

      </motion.div>

    </motion.div>
  )
}

export default FunFact