'use client'
import { LabelDiamond, LabelOne } from '@/assets/svg'
import React, { useRef } from 'react'
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { Images } from '@/assets/png'

const Introduction = () => {

  const pageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start end', 'end start']
  })

  const isInView = useInView(pageRef, { once: true })




  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('scrolly progress for introduction', latest)
  } )


  return (

    <motion.div
      ref={pageRef}
      className='bg-[#faeadc] h-[300vh]'
    >
      <motion.div 
      
      className='h-screen sticky top-0 bg-brand-black rounded-t-[16px] flex flex-col items-start justify-center gap-y-12 px-4'
      style={{
        borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.5, 0.6, 0.7], [72, 24, 24, 0]),
        borderTopRightRadius: useTransform(scrollYProgress, [0, 0.5, 0.6, 0.7], [72, 24, 24,0]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2], [0, -200, 0])
      }}
      
      >
          <div className='self-center flex gap-2 items-center'>
            <LabelOne />
            <p className='rounded-[12px] border border-[#FBF0E6]text-branded-black font-semibold text-base text-[#FBF0E6] py-2 px-2.5'>Introduction</p>

          </div>
            <Image 
              src={Images.Me}
              width={277}
              height={184}
              alt=''
              className='self-center'
            
            />

            <div className=''>
              <span><LabelDiamond className="inline-block mb-2 mr-1.5" /></span>
              <span className='text-2xl font-champBlack text-brand-white'>I’m Emmanuel Sunday, <span className='bg-[#8BDFDD] text-brand-black px-2 rounded-[8px] '>Software</span> Engineer,  and CS Junior Student.</span>
            </div>

            <div className='space-y-4 text-brand-white'>
              <p>I design and build websites and applications that are beautiful, structured, and secure by default.</p>
              <p>With a BSc in Computer Science and over 3 years                   of hands-on experience, I bring structure, technical expertise and design sense to every project i work on. These are my manthras!</p>
            </div>
      </motion.div>
    </motion.div>
    
  )
}

export default Introduction