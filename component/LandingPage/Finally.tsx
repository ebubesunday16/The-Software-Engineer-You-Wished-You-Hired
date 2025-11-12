'use client'
import React, { useRef } from 'react'
import {motion, useInView, useScroll, useTransform} from 'motion/react'
import { LabelTwo, Speaker } from '@/assets/svg'
import Image from 'next/image'
import { Images } from '@/assets/png'

const Finally = () => {
  const pageRef = useRef(null)
  const isInView = useInView(pageRef, {once: true})

  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      ref={pageRef}
      className='px-4 h-screen flex flex-col justify-between'
    >
      <div className='self-center justify-center  flex gap-2 items-center overflow-hidden'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, x: 0, scale: [0.95, 1.05, 1]  } : { opacity: 0}}
            transition={{ duration: 0.2, delay: 0.4, ease: 'easeOut' }}
            style={{
              color: useTransform(scrollYProgress, [0, 0.1111], ['#fdf9f0', '#141414']),
            }}
          >
            <LabelTwo />
          </motion.div>

          <motion.p
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 'auto', opacity: 1, scale: [0.95, 1.05, 1]  } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.4, ease: 'easeOut' }}
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
                width={180}
                height={145}
                alt='goofy version of me'

              />

              <p className='text-xl font-champBlack text-brand-black flex-1'>
              The software engineer you wish You hired
              </p>

            </div>

            <div className='flex items-center gap-1.5'>
              <div className='bg-[#F3C7DE] border border-[#2E282A] py-2.5 px-4 rounded-[37px] text-xs font-bold text-center flex-3/5 '>Get In Touch</div>
              <div className='border border-[#2E282A] py-2.5 px-4 rounded-[37px] text-xs font-bold text-center flex-1/5'>LinkedIn</div>
              <div className='border border-[#2E282A] py-2.5 px-4 rounded-[37px] text-xs font-bold text-center flex-1/5'>Whatsapp</div>
              

            </div>
          </div>

        </div>

        <div></div>

    </motion.div>
  )
}

export default Finally