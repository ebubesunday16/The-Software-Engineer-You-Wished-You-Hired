'use client'
import { Images } from '@/assets/png'
import { LabelOne, LabelTwo, Leaf, Leaf2 } from '@/assets/svg'
import { motion, useInView, useMotionValueEvent, useSpring, useTransform } from 'motion/react'
import { useScroll } from 'motion/react'
import Image from 'next/image'
import React, { useRef } from 'react'

const Stack = () => {
  const pageRef = useRef(null)
  const { scrollYProgress} = useScroll({
    target: pageRef,
    offset: ['start start', 'end start']
  })

  const isInView = useInView(pageRef, {  })


  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('scrollYProgress for stack', latest)
  })

  return (
    <motion.div 
      className='h-[200vh] '
      ref={pageRef}
    >
      <motion.div 
        className='h-screen sticky top-0 flex flex-col justify-between items-center space-y-12 py-12 px-4 mt-24'
        style={{
          background: useTransform(scrollYProgress, [0, 0.1111, 0.8, 0.9], ['#141414', '#faeadc', '#faeadc', '#141414'])
        }}
      >
        <div className='self-center justify-center  flex gap-2 items-center overflow-hidden'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, x: 0, scale: [0.95, 1.05, 1]  } : { opacity: 0}}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
            style={{
              color: useTransform(scrollYProgress, [0, 0.1111], ['#fdf9f0', '#141414']),
            }}
          >
            <LabelTwo />
          </motion.div>

          <motion.p
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 'auto', opacity: 1, scale: [0.95, 1.05, 1]  } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
            className='rounded-[12px] border border-[#FBF0E6] font-semibold text-xs text-[#FBF0E6] py-1.5 px-2.5 whitespace-nowrap overflow-hidden'
            style={{
              color: useTransform(scrollYProgress, [0, 0.1111], ['#fdf9f0', '#141414']),
              borderColor: useTransform(scrollYProgress, [0, 0.1111], ['#fdf9f0', '#141414'])
            }}
          >
            Stack
          </motion.p>

          
        </div>
        
        
        <div className='space-y-8'>

          <motion.div 
            className='text-xs flex flex-col items-center'
            style={{
              color: useTransform(scrollYProgress, [0, 0.1111], ['#fdf9f0', '#141414'])
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
                  className="max-w-none"
                />
              </div>
              <motion.div
                className="relative z-10 px-4 w-full text-xs flex flex-col gap-y-6"
                style={{
                  opacity: useTransform(scrollYProgress, [0.31, 0.34], [0, 1]),
                }}
              >
                <p className="font-champBlack text-3xl text-center">
                  The sharpest weapon is nothing in the hands of the unskilled.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className='space-y-4 text-xs'
            style={{
              color: useTransform(scrollYProgress, [0, 0.1111], ['#fdf9f0', '#141414'])
            }}
          >
            <p>I usually adapt my stack to the project's needs, but I've worked the most with React, and Next.js for web, Nodejs for backend, PostgreSQL for databases, and React Native for mobile apps.</p>
            <p>You may also find me playing around nest js, python, C++ as the project demands.</p>
          </motion.div>
        </div>

        <div className=''></div>


        
      </motion.div>
    </motion.div>
  )
}

export default Stack