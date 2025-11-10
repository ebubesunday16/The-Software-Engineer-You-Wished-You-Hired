'use client'
import { LabelDiamond, LabelOne } from '@/assets/svg'
import React, { useRef } from 'react'
import { delay, easeOut, motion, useInView, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import { Images } from '@/assets/png'

const Introduction = () => {

  const pageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start end', 'end end']
  })

  const stickRef = useRef(null)

  const isInView = useInView(stickRef, { once: true })



  const paragraph = `I design and build websites and applications that are beautiful, structured, and secure by default.`

  const paragraph2 = `With a BSc in Computer Science and over 3 years of hands-on experience, I bring structure, technical expertise and design sense to every project i work on. These are my manthras!`

  const words = paragraph.split(' ')

  const words2 = paragraph2.split(' ')

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('scrolly progress for introduction', latest)
  } )

  
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
      borderRadius: 0,   borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.067, 0.134, 0.2, 0.4], [72, 16, 16, 10.66,  0]),
        borderTopRightRadius: useTransform(scrollYProgress, [0, 0.067, 0.134, 0.2, 0.4 ], [72, 16, 16, 10.66, 0]),
        y: useTransform(scrollYProgress, [0, 0.134, 0.4], [0, -100, 0 ]),
    },
  }
  
  const expressiveSpatial = {
    stiffness: 280,  
    damping: 20,    
    mass: 0.8,  
  };

  return (

    <motion.div
      ref={pageRef}
      className='bg-[#faeadc] h-[200vh]'
    >
      <motion.div 
      className='min-h-screen sticky top-0 bg-brand-black flex flex-col items-start justify-center gap-y-12 py-16 px-4'
      style={{
        borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.067, 0.134, 0.2, 0.4], [72, 16, 16, 10.66,  0]),
        borderTopRightRadius: useTransform(scrollYProgress, [0, 0.067, 0.134, 0.2, 0.4 ], [72, 16, 16, 10.66, 0]),
        // y: useSpring(useTransform(scrollYProgress, [0, 0.134, 0.2, 0.4], [0, -100, -100, 0 ]), expressiveSpatial),
     
        
      }}
      
      >
          <div className='self-center flex gap-2 items-center'>
            <LabelOne />
            <p className='rounded-[12px] border border-[#FBF0E6] font-semibold text-xs text-[#FBF0E6] py-1.5 px-2.5'>Introduction</p>

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
              <span className='text-2xl font-champBlack text-brand-white'>I’m Emmanuel Sunday, <motion.span 
              style={{
                scale: useSpring(useTransform(scrollYProgress, [0.5, 1], [0.8, 1]), {
                  stiffness: 120,
                  damping: 20,

                })
              }}
              className='bg-[#8BDFDD] text-brand-black px-2 rounded-[8px] inline-block'>Software</motion.span> Engineer,  and CS Junior Student.</span>
            </div>

            <motion.div 
            className='space-y-4 text-brand-white text-sm'
            
            >
              <motion.p
              ref={stickRef}
              variants={containerVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}

              >{words.map((item, i) => {
                return (
                  <motion.span
                  key={i}
                  variants={wordVariants}
                  className='text-[#313131] bg-[#313131] rounded-3xl'
                  >
                    {item + ' '}
                  </motion.span>
                )
              })}</motion.p>

              <motion.p
              variants={containerVariants2}
              initial='hidden'
              animate={ isInView ? 'visible' : 'hidden'}
              >
              {words2.map((item, i) => {
                return (
                  <motion.span
                  key={i}
                  variants={wordVariants}
                  className='text-[#313131] bg-[#313131] rounded-3xl'
                  >
                    {item + ' '}
                  </motion.span>
                )
              })}
              </motion.p>
            </motion.div>
      </motion.div>
    </motion.div>
    
  )
}

export default Introduction