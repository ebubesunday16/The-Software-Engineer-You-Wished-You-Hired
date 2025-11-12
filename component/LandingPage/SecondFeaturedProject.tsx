'use client'
import { Images } from '@/assets/png'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'

const SecondFeaturedProject = () => {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const imageCount = 5 // Update this based on your actual images


  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start']
  })

  const Contributions = [
    'Developed and deployed a full-featured pharmacy delivery and telehealth app using React Native for the frontend and Express.js with Supabase for backend services.',
    'Engineered a robust multi-role system to support customers, drivers, pharmacies, and consultants with real-time updates.',
    'Integrated secure video consultation and in-app chat features for patients and healthcare practitioners.',
    'Implemented smart driver queue logic with real-time tracking, push notifications, and delivery status synchronization.',
    'Built pharmacy inventory management with live stock tracking, order validation, and automated assignment workflows.',
    'Designed an intuitive, clean, and accessible mobile UI optimized for performance and seamless user experience.',
    'Configured authentication, role-based access control, and data encryption to ensure privacy and security compliance.'
  ]
  
  const Impact = [
    'Enabled fast and reliable doorstep delivery of prescriptions and healthcare essentials.',
    'Improved consultation accessibility by allowing patients to connect directly with verified practitioners.',
    'Streamlined pharmacy operations and delivery coordination across multiple service providers.',
    'Enhanced customer experience with real-time order tracking and instant messaging with drivers and consultants.'
  ]
  
  const description = `
  iDeliver is a mobile platform that connects customers, pharmacies, drivers, and healthcare consultants in one ecosystem. It allows users to order drugs, book consultations, chat with practitioners, and track deliveries in real time  all within a secure and easy-to-use app.
  `
  

  const splitDescription = description.split(' ')

  // Track scroll position to update active dot
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft
      const itemWidth = scrollContainer.scrollWidth / imageCount
      const index = Math.round(scrollLeft / itemWidth)
      setActiveIndex(index)
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [imageCount])

  // Scroll to specific image when dot is clicked
  const scrollToImage = (index) => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const itemWidth = scrollContainer.scrollWidth / imageCount
    scrollContainer.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    })
  }

  const containerVariants = {
    hidden: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      }
    }
  }

  const listicleVariants = {
    hidden: {
    },
    visible: {
      transition: {
        staggerChildren: 0.01,
        delayChildren: (splitDescription.length * 0.01)
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
      viewport: {
        once: true
      }
    },
  }

  useMotionValueEvent(scrollYProgress, 'change', (latest) => console.log('Second featured got me', latest))

  return (
    <div
        className='bg-[#fdf9f0]'
    >

        <motion.div 
        ref={sectionRef}
        style={{
            // borderTopRightRadius: useTransform(scrollYProgress, [0, 0.45], [32, 0]),
            // borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.45], [32, 0]),
        }}
        className='bg-brand-black text-brand-white px-4 py-16 space-y-8 pb-32 '>
        <div className='font-champBlack text-2xl sticky top-0 py-5 bg-brand-black z-50'>
            IDeliver
        </div>

        {/* Apple-style image carousel */}
        <div className='w-full'>
            <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='relative'
            >
            {/* Scrollable container */}
            <div
                ref={scrollRef}
                className='flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4'
                style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
                }}
            >
                {/* Replace with your actual images */}
                {[Images.SecondFeatured, Images.SecondFeatured2, Images.SecondFeatured3, Images.SecondFeatured4, Images.SecondFeatured5].map((image, index) => (
                <motion.div
                    key={index}
                    className='min-w-full snap-center'
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Image
                    src={image}
                    width={390}
                    height={250}
                    alt={`Project image ${index + 1}`}
                    className='w-full rounded-2xl shadow-2xl'
                    />
                </motion.div>
                ))}
            </div>

            {/* Pagination dots */}
            <div className='flex justify-center gap-2 mt-6'>
                {Array.from({ length: imageCount }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={`transition-all duration-300 rounded-full ${
                    activeIndex === index
                        ? 'w-8 h-2 bg-brand-white'
                        : 'w-2 h-2 bg-brand-white/30 hover:bg-brand-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                />
                ))}
            </div>
            </motion.div>
        </div>

        <div className='space-y-4'>
            <p className='font-champBlack text-lg'>Pharmacy delivery and telehealth mobile app</p>
            <motion.p
            className='text-sm'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            >
            {
                splitDescription.map((item, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants}
                >
                    {item + ' '}
                </motion.span>
                ))
            }
            </motion.p>

            <div className='space-y-6'>
            <div className='space-y-8'>
                <p className='text-sm font-semibold'>Key Contributions:</p>
                <div>
                <motion.ul
                    className='space-y-4'
                    variants={listicleVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                >
                    {
                    Contributions.map((paragraph, paragraphIndex) => {
                        return (
                        <motion.li
                            key={paragraphIndex}
                            className='flex items-start gap-x-4 pl-4'
                            viewport={{ once: true }}
                        >
                            <div
                            className='rounded-full flex items-center justify-center text-sm bg-[#8BDFDD] text-brand-black min-w-6 min-h-6 w-6 h-6 mt-1'
                            >{paragraphIndex + 1}</div>

                            <motion.p className='text-sm'>
                            {paragraph.split(' ').map((word, wordIndex) => (
                                <motion.span
                                key={wordIndex}
                                variants={wordVariants}
                                viewport={{ once: true }}
                                >
                                {word + ' '}
                                </motion.span>
                            ))}
                            </motion.p>
                        </motion.li>
                        )
                    })
                    }
                </motion.ul>
                </div>
            </div>

            <div className='space-y-8'>
                <p className='text-sm font-semibold'>Impact:</p>
                <div>
                <motion.ul
                    className='space-y-4'
                    variants={listicleVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                >
                    {
                    Impact.map((paragraph, i) => {
                        return (
                        <motion.li
                            key={i}
                            className='flex items-start gap-x-4 pl-4'
                            viewport={{ once: true }}
                        >
                            <div
                            className='rounded-full flex items-center justify-center text-sm bg-[#E78EBC] text-brand-black min-w-6 min-h-6 w-6 h-6 mt-1'
                            >{i + 1}</div>
                            <motion.p className='text-sm'>{paragraph.split(' ').map((word, wordIndex) => (
                            <motion.span
                                key={wordIndex}
                                variants={wordVariants}
                            >
                                {word + ' '}
                            </motion.span>
                            ))}</motion.p>
                        </motion.li>
                        )
                    })
                    }
                </motion.ul>
                </div>
            </div>
            </div>
        </div>
        </motion.div>
    </div>
  )
}

export default SecondFeaturedProject