'use client'
import React, { useRef } from 'react'
import {motion, useInView, useMotionValueEvent, useScroll, useTransform} from 'motion/react'
import { LabelThree, LabelTwo, Speaker } from '@/assets/svg'
import Image from 'next/image'
import { Images } from '@/assets/png'
import { div } from 'motion/react-client'

const Finally = () => {
  const pageRef = useRef(null)
  const isInView = useInView(pageRef, {once: true})

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start end', 'end start']
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => console.log('what it feels like finally', latest))
  return (
    <div className='bg-[#faeadc]'>

      <motion.div
        ref={pageRef}
        id='finally'
        className='px-4 h-screen flex flex-col justify-between py-24 bg-brand-black '
        style={{
            borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.067, 0.134, 0.2, 0.4], [72, 16, 16, 10.66,  0]),
            borderTopRightRadius: useTransform(scrollYProgress, [0, 0.067, 0.134, 0.2, 0.4 ], [72, 16, 16, 10.66, 0]),
            y: useTransform(scrollYProgress, [0, 0.134, 0.3, 0.4], [0, -100, -40, 0 ])
    
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
              <LabelThree />
            </motion.div>

            <motion.p
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 'auto', opacity: 1, scale: [0.95, 1.05, 1]  } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
              className='rounded-[12px] border border-[#FBF0E6] font-semibold text-xs text-[#FBF0E6] py-1.5 px-2.5 whitespace-nowrap overflow-hidden'
              
            >
              Finally
            </motion.p>

            
          </div>

          <div className='space-y-8'>
            <div className='flex gap-4 '>
                <div>
                  <p className='font-champBlack text-brand-white  text-4xl'>I make <span className='block text-[#17BEBB]'>ideas </span> move</p>
                </div>

                <div className='bg-[#F3C7DE] border border-[#E78EBC] rounded-[24px] flex-1 flex items-center justify-center'>
                  <div className='scale-150  border-white'>
                    <Speaker />
                  </div>

                </div>

            </div>

            <div className='bg-[#F5DDD6] border border-[#DC8771] rounded-[24px] p-6 space-y-4'>
              <div className='flex items-center gap-4'>
                <Image 
                  src={Images.FinalMe}
                  width={160}
                  height={129}
                  alt='goofy version of me'

                />

                <p className='text-xl font-champBlack text-brand-black flex-1'>
                The software engineer you wish You hired
                </p>

              </div>

              <div className='flex items-stretch gap-1.5'>
                {/* Email */}
                <a 
                  href="mailto:ebubesunday16@gmail.com" 
                  className='bg-[#F3C7DE] border border-[#2E282A] py-2.5 px-4 rounded-[37px] text-xs font-bold text-center flex-3/5 flex items-center justify-center hover:bg-[#f7bcd7] transition-colors'
                >
                  Get In Touch
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/emannsunday/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='border border-[#2E282A] py-2.5 px-4 rounded-[37px] text-xs font-bold text-center flex-1/5 flex items-center justify-center hover:bg-gray-100 transition-colors'
                >
                  LinkedIn
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/2348054730811" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='border border-[#2E282A] py-2.5 px-4 rounded-[37px] text-xs font-bold text-center flex-1/5 flex items-center justify-center hover:bg-gray-100 transition-colors'
                >
                  WhatsApp
                </a>
              </div>

            </div>

          </div>

          <div className='hidden'></div>

      </motion.div>
    </div>
  )
}

export default Finally