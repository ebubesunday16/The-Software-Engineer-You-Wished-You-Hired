'use client'
import { LabelDiamond, LabelOne } from '@/assets/svg'
import React, { useRef, useState } from 'react'
import { motion, useInView, useMotionValueEvent, useScroll, useTransform, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { Images } from '@/assets/png'

const Introduction = () => {

  const pageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start start', 'end end']
  })

  const stickRef = useRef(null)
  const isInView = useInView(stickRef, {  })

  const [softwareText, setSoftwareText] = useState('Frontend')

  // 🌀 Scroll-based toggle between Frontend and Backend
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.4) setSoftwareText('Software')
    else if (latest < 0.7 )setSoftwareText('Frontend') 
    else setSoftwareText('Backend')
  console.log('introduction', latest)
  })

  const paragraph = `I design and build websites and applications that are beautiful, structured, and secure by default.`
  const paragraph2 = `With a BSc in Computer Science and over 3 years of hands-on experience, I bring structure, technical expertise and design sense to every project i work on. These are my manthras!`

  const words = paragraph.split(' ')
  const words2 = paragraph2.split(' ')

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: 0.3
      }
    }
  }

  const containerVariants2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.4 + (words.length * 0.06)
      }
    }
  }

  const wordVariants = {
    hidden: { 
      color: '#313131', 
      backgroundColor: '#313131', 
      borderRadius: 24 
    },
    visible: { 
      color: '#fdf9f0', 
      backgroundColor: '#141414', 
      borderRadius: 0,   
      borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.067, 0.134, 0.2, 0.4], [72, 16, 16, 10.66,  0]),
      borderTopRightRadius: useTransform(scrollYProgress, [0, 0.067, 0.134, 0.2, 0.4 ], [72, 16, 16, 10.66, 0]),
      y: useTransform(scrollYProgress, [0, 0.134, 0.4], [0, -100, 0 ])
    },
  }

  return (
    <motion.div
      ref={pageRef}
      className='bg-brand-black h-[200vh]'
    >
      <motion.div 
        className='min-h-screen sticky top-0 bg-brand-black flex flex-col items-start justify-center gap-y-12 py-24 px-4'
      >
        <div className='self-center justify-center  flex gap-2 items-center overflow-hidden'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, x: 0, scale: [0.95, 1.05, 1]  } : { opacity: 0}}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          >
            <LabelOne />
          </motion.div>

          <motion.p
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 'auto', opacity: 1, scale: [0.95, 1.05, 1]  } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.3, ease: 'easeOut' }}
            className='rounded-[12px] border border-[#FBF0E6] font-semibold text-xs text-[#FBF0E6] py-1.5 px-2.5 whitespace-nowrap overflow-hidden'
          >
            Introduction
          </motion.p>

          
        </div>


        <Image 
          src={Images.Me}
          width={277}
          height={184}
          alt=''
          className='self-center'
        />

        <div className=''>
          <span>
            <LabelDiamond className="inline-block mb-2 mr-1.5" />
          </span>
          <span className='text-2xl font-champBlack text-brand-white'>
            I’m Emmanuel Sunday,&nbsp;

            {/* 🔥 Dynamic Frontend / Backend span */}
            <motion.span 
              layout
              className='bg-[#8BDFDD] text-brand-black px-2 rounded-[8px] inline-block relative'
            >
              <AnimatePresence mode='wait'>
                <motion.span
                  key={softwareText}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className='inline-block'
                >
                  {softwareText}
                </motion.span>
              </AnimatePresence>
            </motion.span>

            &nbsp;Engineer, and CS Junior Student.
          </span>
        </div>

        <motion.div className='space-y-4 text-brand-white text-sm'>
          <motion.p
            ref={stickRef}
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            {words.map((item, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className='text-[#313131] bg-[#313131] rounded-3xl'
              >
                {item + ' '}
              </motion.span>
            ))}
          </motion.p>

          <motion.p
            variants={containerVariants2}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            {words2.map((item, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className='text-[#313131] bg-[#313131] rounded-3xl'
              >
                {item + ' '}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Introduction
