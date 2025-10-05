'use client'
import React, { useRef } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'

const Finally = () => {

    const pageRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: pageRef,
        offset: ['start end', 'end end']
    })

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        console.log('scrollYprogress for finally', latest)
    })
  return (
    <motion.div 
        className='h-[120vh]'
        ref={pageRef}
        style={{
            scale: useTransform(scrollYProgress, [0, 0.2], [0.8, 1]),
            x: useTransform(scrollYProgress, [0, 0.2], [400, 0]),
        }}
    >

        <motion.div className='min-h-screen bg-amber-200'>
          Finally  
        </motion.div>
    </motion.div>
  )
}

export default Finally