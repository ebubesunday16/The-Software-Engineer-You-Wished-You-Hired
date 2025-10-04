'use client'
import { Images } from '@/assets/png'
import { LabelOne, LabelTwo, Leaf, Leaf2 } from '@/assets/svg'
import { motion, useMotionValueEvent, useTransform } from 'motion/react'
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
    console.log('scrollYProgress for fun fact', latest)
  })


  return (
    <motion.div 
    className='h-[300vh] '
    ref={pageRef}
    >
      <motion.div 
      className='min-h-screen bg-[#faeadc] rounded-t-[16px] sticky top-0 flex flex-col items-center space-y-12    px-4'
      style={{
        borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.6], [72, 24, 24, 16,  0]),
        borderTopRightRadius: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.6 ], [72, 24, 24, 16, 0]),
        
      }}
      >
        <motion.div
        className=''
          transition={{
            type: 'spring',
            ease: 'backIn'
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], [150, 400]),
            x: useTransform(scrollYProgress, [0.20, 0.4 ], [0, 23]),
            rotate: useTransform(scrollYProgress, [0, 0.2, 0.5, 0.67], [0, -30, 50, 30]),
            opacity: useTransform(scrollYProgress, [0.55, 0.57], [1, 0]),
            
          }}
        >
          <Leaf className={' scale-90'}/>
        </motion.div>
        <div className='self-center flex gap-2 items-center'>
            <LabelTwo />
            <p className='rounded-[12px] border border-brand-black font-semibold text-sm text-brand-black py-2 px-2.5'>Stack</p>

          </div>

        <motion.div 
        className='text-xs flex flex-col items-center'
        style={{
          opacity: useTransform(scrollYProgress, [0.72, 0.75], [0, 1])
        }}
        
        >
          <p className='font-bold'>Here's a fun fact:</p>
          <p>We are skilled and know how to do</p>
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
            className="relative z-10 px-4 w-full text-xs flex flex-col gap-y-6"
            style={{
              opacity: useTransform(scrollYProgress, [0.58, 0.63], [0, 1]),
            }}
          >
            <p className=" font-champBlack text-2xl max-w-[80%]">
            The sharpest weapon is nothing in the hands of the unskilled.
            </p>
            <p className=' font-champBlack text-2xl self-end max-w-[80%]'>
                He will win who knows how to handle both superior and inferior forces.
            </p>
          </motion.div>

        </div>



        <div className='flex items-center gap-x-6 self-end'>
          <div>
            <p className='text-xs font-semibold'>Sun Tzu</p>
            <p className='text-xs'>The Author of the  Art<br/> of War</p>
          </div>
          <Image 
            src={Images.Suntzu}
            width={48}
            height={48}
            alt='suntzu'
          />
        </div>
        <div className='space-y-4'>
            <p>I usually adapt my stack to the project’s needs, but I’ve worked the most with React and Next.js for web, PostgreSQL for databases, and React Native for mobile apps.</p>
            <p>You may also find me playing a lot with express js, python, C++ as the project demands.</p>

        </div>

      </motion.div>

    </motion.div>
  )
}

export default Stack