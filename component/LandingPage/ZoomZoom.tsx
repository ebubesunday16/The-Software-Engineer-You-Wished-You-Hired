'use client'
import { Hashtag, Speaker, Zoom } from '@/assets/svg'
import Header from '@/component/Header'
import React, { useRef } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'


const ZoomZoom = () => {
  const pageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start end", "end start"] 
  })

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("scrollYProgress", latest)
  // })

  const parent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const child = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  }

  return (
    <motion.div 
    className='h-[300vh] pb-8' 
    ref={pageRef}>

      <motion.div 
      className='sticky top-0 flex flex-col space-y-18 h-screen py-6 px-4'
      >
          <Header className=""/>
        
          <motion.div 
          className=' relative  flex flex-col items-center gap-y-4 min-h-[320px] min-w-[320px] mx-auto'
          variants={parent}
          initial="hidden"
          animate="show"
          
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20
          }}
          >

            <motion.div 
            className='bg-[#17BEBB] flex items-center justify-center w-25 h-25 rounded-[16px] absolute -translate-x-16 bottom-18'
            variants={child}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
            style={{
              y: useTransform(scrollYProgress, [0.25, 0.3, 0.35], [0, -100, -120]),
              x: useTransform(scrollYProgress, [0.25, 0.27, 0.35, 0.65], [0, 70, 100, 120]),
              scale: useTransform(scrollYProgress, [0.4, 0.55], [1, 0.4]),
              borderRadius: useTransform(scrollYProgress, [0.6, 0.65], [16, 1000]),
            }}
            
            
            >
              <Zoom />
            </motion.div>

            <motion.div 
            className='bg-[#E78EBC] flex items-center justify-center w-25 h-25 rounded-[16px] absolute translate-x-20 -translate-y-4 bottom-12 transform scale-160'
            variants={child}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
            style={{
              y: useTransform(scrollYProgress, [0.25, 0.35, 0.7], [0, 10, 40]),
              x: useTransform(scrollYProgress, [0.25, 0.35, 0.7], [0, 0, -10]),
              scale: useTransform(scrollYProgress, [0.4, 0.55], [1, 0.25])
            }}
            
            >
              
              <Speaker className={''}/>
            </motion.div>

            <motion.div 
            className='w-25 h-25 flex items-center justify-center bg-[#EDB88B] rounded-[16px] row-start-2 absolute transform bottom-0 -translate-y-4  scale-140'
            variants={child}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
            style={{
              y: useTransform(scrollYProgress, [0.25, 0.35, 0.759, 0.8], [0, -30, -30, 8]),
              x: useTransform(scrollYProgress, [0.25, 0.35, 0.8, 0.82], [0, -60, -60, -48]),
              scale: useTransform(scrollYProgress, [0.4, 0.55], [1, 0.286]),
              borderRadius: useTransform(scrollYProgress, [0.4, 0.55], [16, 1000])
            }}
            >
              <Hashtag />
            </motion.div>


          </motion.div>

          <motion.div 
          className='mx-auto items-center text-center text-brand-white font-champBlack space-y-5 sticky top-0 text-4xl'
          style={{
            y: useTransform(scrollYProgress, [0.45, 0.6], [0, 300]),
            opacity: useTransform(scrollYProgress, [0.45, 0.48], [1, 0]),
            display: useTransform(scrollYProgress, [0.48, 0.488], ['block', 'hidden']),
          }}
          >
            <p> The software engineer you <span className='text-[#eca5c9]'>wish</span> you hired</p>
          </motion.div>

          <motion.div 
          className=' mx-auto items-center text-center text-white  font-champBlack space-y-5  text-4xl'
          style={{
            y: useTransform(scrollYProgress, [0.595, 0.61], [0, -530]),
            opacity: useTransform(scrollYProgress, [0.595, 0.61], [0, 1])
          }}
          
          >
            <motion.span 
              className='block'
              style={{
                opacity: useTransform(scrollYProgress, [0.63, 0.65], [0, 1]),
                x: useTransform(scrollYProgress, [0.6, 0.65], [-40, 1]),

              }}
              > I </motion.span>
            <motion.span className='block'
            style={{
              opacity: useTransform(scrollYProgress, [0.63, 0.7], [0, 1]),
              x: useTransform(scrollYProgress, [0.63, 0.7], [40, 1]),

            }}
            >turn</motion.span>
            <motion.span
             className='block'
             style={{
              opacity: useTransform(scrollYProgress, [0.65, 0.72], [0, 1]),
              x: useTransform(scrollYProgress, [0.65, 0.72], [-40, 1]),

            }}
             >ideas</motion.span>
            <motion.span className='block'
            style={{
              opacity: useTransform(scrollYProgress, [0.69, 0.74], [0, 1]),
              x: useTransform(scrollYProgress, [0.69, 0.74], [40, 1]),

            }}
            >to</motion.span>
            <motion.span 
            className='block'
            style={{
              opacity: useTransform(scrollYProgress, [0.74, 0.76], [0, 1]),
              x: useTransform(scrollYProgress, [0.74, 0.76], [40, 1]),
            }}
            >businesses</motion.span>

          </motion.div>

          <motion.div 
          className='self-center space-y-4 mt-auto '
          style={{
            y: useTransform(scrollYProgress, [0.61, 0.62], [0, -480]),
            opacity: useTransform(scrollYProgress, [0.62, 0.8], [0, 1]),
            display: useTransform(scrollYProgress, [0.49, 0.499], ['hidden', 'block']),

          }}
          >

            <button className='bg-[#FDF9F0] rounded-[37px] self-center px-12 py-2'>
              <span className='text-[#2E282A] font-bold'>Let's build that idea together</span>
            </button>
            <p className='text-brand-white text-center text-sm'>disclaimer: you may smile excessively</p>
          </motion.div>
          
      </motion.div>
    </motion.div>
  )
}

export default ZoomZoom