'use client'
import { Hashtag, Speaker, Zoom } from '@/assets/svg'
import Header from '@/component/Header'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'
import { useRouter } from 'next/navigation'


const ZoomZoom = () => {

  const [ animationWidth, setAnimationWidth ] = useState(1)

  const [ ctaVisibility, setCtaVisibility ] = useState(false)

  const pageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start end", "end start"] 
  })

  const router = useRouter()

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("scrollYProgress", latest)
  // })
  const expressiveSpatial = {
    stiffness: 280,  
    damping: 20,    
    mass: 0.8,  
  };

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

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {

    if (latest > 0.49 ) {
      setCtaVisibility(true)
    } else {
      setCtaVisibility(false)
    }

    console.log('scrolly progress for zoom zoom', latest)
  } )

  useEffect(() => {
    const handleAnimationWidth = () => {
      if (window.innerWidth < 640) {
        setAnimationWidth(1)
      } else if (window.innerWidth < 758) {
        setAnimationWidth(1.2)
      } else if (window.innerWidth < 1024) {
        setAnimationWidth(1.5)
      } else {setAnimationWidth(1)}
    }

    window.addEventListener('resize', handleAnimationWidth)

    handleAnimationWidth()

    return () => window.removeEventListener('resize', handleAnimationWidth)
  }, [])

  return (
    <motion.div 
    className='h-[300vh]  flex flex-col ' 
    ref={pageRef}>

      <motion.div 
      className='h-screen sticky top-0  flex flex-col justify-between pt-6 px-4 pb-6'
      > 
          <Header className=""/>
        
          <motion.div 
          className=' relative  flex flex-col items-center gap-y-4 mx-auto min-h-[320px] min-w-[320px] sm:min-w-[400px] sm:min-h-[400px] md:min-w-[600px] md:min-h-[600px] lg:min-w-[600px] lg:min-h-[300px] '
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
            className='bg-[#17BEBB] flex items-center justify-center w-25 h-25 rounded-[16px] absolute -translate-x-16 sm:-translate-x-24 lg:-translate-x-16  sm:-translate-y-48 lg:translate-y-6   bottom-18'
            variants={child}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
            style={{
              y: useSpring(useTransform(scrollYProgress, [0.25, 0.27, 0.35], [0, -100, -170 * animationWidth]), expressiveSpatial),
              x: useSpring(useTransform(scrollYProgress, [0.25, 0.27, 0.35, 0.46], [0, 70, 110 *animationWidth, 110 * animationWidth]), expressiveSpatial),
              scale: useSpring(useTransform(scrollYProgress, [0.4, 0.45 ], [1 * animationWidth, 0.4 * animationWidth]), expressiveSpatial),
              borderRadius: useSpring(useTransform(scrollYProgress, [0.4, 0.55], [16, 1000]), expressiveSpatial),
            }}
            >
              <Zoom />
            </motion.div>

            <motion.div 
            className='bg-[#CD5334] flex items-center justify-center w-25 h-25 rounded-[16px] absolute translate-x-20 sm:translate-x-32 lg:translate-x-24 -translate-y-4 bottom-12 sm:-translate-y-56 lg:translate-y-6 transform scale-160'
            variants={child}
            
            style={{
              y: useSpring(useTransform(scrollYProgress, [0.25, 0.26, 0.35, 0.5], [0, 8, 10, 0 * animationWidth]), expressiveSpatial),
              x: useSpring(useTransform(scrollYProgress, [0.25, 0.26, 0.35], [0, 0, -4 * animationWidth]), expressiveSpatial),
              scale: useSpring(useTransform(scrollYProgress, [0.4, 0.45], [1 * animationWidth, 0.25 * animationWidth]), expressiveSpatial)
            }}
            
            >
              
              <Speaker className={''}/>
            </motion.div>

            <motion.div 
            className='w-25 h-25 flex items-center justify-center bg-[#EDB88B] rounded-[16px] row-start-2 absolute transform bottom-0 -translate-y-4 sm:-translate-x-12 sm:-translate-y-56 lg:translate-y-2 lg:-translate-x-6 scale-140'
            variants={child}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
            style={{
              y: useSpring(useTransform(scrollYProgress, [0.25, 0.26, 0.3, 0.7, 0.71], [0, -5, -80, -70 * animationWidth, -30 * animationWidth]), expressiveSpatial),
              x: useSpring(useTransform(scrollYProgress, [0.25, 0.26, 0.3, 0.6, 0.72], [0, -15 * animationWidth, -60 * animationWidth, -60 * animationWidth, -48 * animationWidth]), expressiveSpatial),
              scale: useSpring(useTransform(scrollYProgress, [0.4, 0.45], [1 * animationWidth, 0.286 * animationWidth]), expressiveSpatial),
              borderRadius: useTransform(scrollYProgress, [0.4, 0.55], [16, 1000])
            }}
            >
              <Hashtag />
            </motion.div>

            <motion.div 
          className='absolute inset-0  mx-auto items-center text-center text-brand-white  font-champBlack space-y-5  text-4xl sm:text-5xl md:text-6xl lg:text-5xl overflow-x-hidden'
          style={{
            // y: useTransform(scrollYProgress, [0.48, 0.485], [0, -530 * animationWidth]),
            opacity: useTransform(scrollYProgress, [0.48, 0.5], [0, 1])
          }}
          
          >
            <motion.span 
              className='block'
              style={{
                opacity: useSpring(useTransform(scrollYProgress, [0.5, 0.52], [0, 1]), expressiveSpatial),
                x: useSpring(useTransform(scrollYProgress, [0.49, 0.52], [-40, 1]), expressiveSpatial),

              }}
              > I </motion.span>
            <motion.span className='block'
            style={{
              opacity: useSpring(useTransform(scrollYProgress, [0.52, 0.55], [0, 1]), expressiveSpatial),
              x: useSpring(useTransform(scrollYProgress, [0.51, 0.55], [40, 1]), expressiveSpatial),

            }}
            >turn</motion.span>
            <motion.span
             className='block'
             style={{
              opacity: useTransform(scrollYProgress, [0.55, 0.6], [0, 1]),
              x: useTransform(scrollYProgress, [0.54, 0.6], [-40, 1]),

            }}
             >ideas</motion.span>
            <motion.span className='block'
            style={{
              opacity: useSpring(useTransform(scrollYProgress, [0.6, 0.65], [0, 1]), expressiveSpatial),
              x: useSpring(useTransform(scrollYProgress, [0.59, 0.65], [40, 1]), expressiveSpatial),

            }}
            >to</motion.span>
            <motion.span 
            className='block'
            style={{
              opacity: useSpring(useTransform(scrollYProgress, [0.65, 0.7], [0, 1]), expressiveSpatial),
              x: useSpring(useTransform(scrollYProgress, [0.64, 0.7], [40, 1]), expressiveSpatial),
            }}
            >businesses</motion.span>

            </motion.div>


          </motion.div>
        

          <motion.div 
          className={`mx-auto  text-center h-48 flex items-center justify-center   ${ctaVisibility ? 'hidden' : 'block'}`}
          style={{
            // y: useTransform(scrollYProgress, [0.35, 0.5], [0, 300]),
            opacity: useTransform(scrollYProgress, [0.4, 0.43], [1, 0]),
           
          }}
          >
            <p className='text-brand-white font-champBlack text-4xl max-w-3xl sm:text-5xl md:text-6xl lg:text-5xl '> The software engineer you <span className='text-[#E78EBC] '>wish</span> you hired</p>
          </motion.div>

          <motion.div 
          className={`self-center space-y-4 h-48 flex flex-col justify-center ${ctaVisibility ? 'block' : 'hidden'} `}
          style={{
            // y: useTransform(scrollYProgress, [0.61, 0.62], [0, -480]),
            opacity: useTransform(scrollYProgress, [0.56, 0.7], [0, 1]),
            

          }}
          >

            <button 
            onClick={() => router.push('#finally')}
            className='bg-[#F3C7DE] rounded-[37px] self-center px-12 sm:px-20 py-2 sm:py-3'>
              <span className='text-[#2E282A] font-bold sm:text-lg'>Let's build that idea together</span>
            </button>
            <p className='text-brand-white text-center text-sm sm:text-base'>disclaimer: you may smile excessively</p>
          </motion.div>
          
      </motion.div>
    </motion.div>
  )
}

export default ZoomZoom