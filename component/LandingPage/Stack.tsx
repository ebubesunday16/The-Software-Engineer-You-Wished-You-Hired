'use client'
import { Images } from '@/assets/png'
import { LabelOne, LabelTwo, Leaf, Leaf2 } from '@/assets/svg'
import { motion, useMotionValueEvent, useSpring, useTransform } from 'motion/react'
import { useScroll } from 'motion/react'
import Image from 'next/image'
import React, { useRef } from 'react'

const Stack = () => {

  const pageRef = useRef(null)
  const { scrollYProgress} = useScroll({
    target: pageRef,
    offset: ['start end', 'end end']
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('scrollYProgress for stack', latest)
  })


  return (
    <motion.div 
    className='h-[300vh] '
    ref={pageRef}
    >
      <motion.div 
      className='min-h-screen  bg-[#faeadc] rounded-t-[16px] sticky top-0 flex flex-col justify-center items-center space-y-12 py-6    px-4'
      style={{
        borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.6], [72, 24, 24, 16,  0]),
        borderTopRightRadius: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.6 ], [72, 24, 24, 16, 0]),
        
        
      }}
      >
        
        <div className='self-center flex gap-2 items-center'>
            <LabelTwo />
            <p className='rounded-[12px] border border-brand-black font-semibold text-xs text-brand-black py-1.5 px-2.5'>Stack</p>

          </div>

        <motion.div 
        className='text-xs flex flex-col items-center'
        style={{
          opacity: useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
        }}
        
        >
          <p className='font-bold'>Here's a fun fact:</p>
          <p>We are skilled and use the sharpest weapon</p>
        </motion.div>

        <div className='flex flex-col gap-y-3'>
         
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
            className="relative z-10 px-4 w-full text-xs flex flex-col gap-y-6"
            style={{
              opacity: useTransform(scrollYProgress, [0.2, 0.3], [0, 1]),
            }}
          >
            <p className=" font-champBlack text-3xl text-center">
            The sharpest weapon is nothing in the hands of the unskilled.
            </p>
            
          </motion.div>

        </div>

        </div>

        {/* <div className='flex items-center gap-x-6 self-center'>
          
          <Image 
            src={Images.Suntzu}
            width={32}
            height={32}
            alt='suntzu'
          />
      </div> */}

        <div className='relative'>
          <motion.div
          className='self-start translate-y-[28px] absolute'
            transition={{
              type: 'spring',
              ease: 'backIn'
            }}
            style={{
              y: useTransform(scrollYProgress, [0.3, 0.6], [0, 23]),
              x: useTransform(scrollYProgress, [0.3, 0.6 ], [0, 300]),
              rotate: useTransform(scrollYProgress, [0, 0.2, 0.5, 0.67], [0, -30, 50, 30]),
              opacity: useTransform(scrollYProgress, [0.5, 0.67], [1, 0]),
              
              
            }}
          >
            <Leaf className={' scale-90'}/>
          </motion.div>

        <motion.div 
        className='space-y-4 text-xs'
        style={{
          opacity: useTransform(scrollYProgress, [0.6, 0.72], [0, 1])
        }}
        
        >
            <p>I usually adapt my stack to the project’s needs, but I’ve worked the most with React, and Next.js for web, Nodejs for backend, PostgreSQL for databases, and React Native for mobile apps.</p>
            <p>You may also find me playing around nest js, python, C++ as the project demands.</p>

        </motion.div>
        </div>
        

      </motion.div>

    </motion.div>
  )
}

export default Stack