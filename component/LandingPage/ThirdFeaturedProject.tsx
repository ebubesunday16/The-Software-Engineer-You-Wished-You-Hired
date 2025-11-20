'use client'
import { Images } from '@/assets/png'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import { Link } from '@/assets/svg'

const ThirdFeaturedProject = () => {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const imageCount = 4 


  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start']
  })

  const Contributions = [
    "Developed and maintained the backend using Express.js with Firebase as the primary database and authentication provider.",
    "Implemented Firebase Authentication and React Query integration for secure and seamless login flows across farmer, herder, and agency roles.",
    "Designed a multi-role access system enabling farmers, herders, and law enforcement agencies to access tailored dashboards and resources.",
    "Structured and optimized Firestore collections for tracking incidents, reports, locations, and role-specific activities.",
    "Built secure Express APIs for incident reporting, location syncing, farmer–herder conflict alerts, and role-based data retrieval.",
    "Implemented real-time Firestore listeners to allow agencies to immediately monitor field updates and active incidents.",
    "Added server-side validation, JWT protection, and Firebase security rules to ensure safe data flow between roles.",
    "Integrated automated notification workflows for escalating reports to the appropriate enforcement agency.",
  ];
  
  
  
  const Impact = [
    "Enabled real-time coordination between farmers, herders, and security agencies to reduce conflict escalation.",
    "Improved the accuracy of field reporting using a structured backend that supports instant updates and verified submissions.",
    "Enhanced safety response times through automated notifications and live agency dashboards.",
    "Provided a stable and secure backend foundation that scaled smoothly across multiple user roles and field operations.",
  ];
  
  
  
  const description = `
AgroTrack is a conflict-prevention and field-monitoring platform designed to support farmers, herders, and law enforcement agencies. 
It enables users to report incidents, track real-time updates, receive alerts, and coordinate responses through a secure backend powered by Express and Firebase. 
The system ensures accountability, communication, and rapid intervention across all user roles in the ecosystem.
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
    <div className=''>
      <motion.div 
        ref={sectionRef}
        style={{
          // borderTopRightRadius: useTransform(scrollYProgress, [0, 0.45], [32, 0]),
          // borderTopLeftRadius: useTransform(scrollYProgress, [0, 0.45], [32, 0]),
        }}
        className='bg-brand-black text-brand-white space-y-8 pb-32 max-w-[1200px] mx-auto'
      >
        <div className='font-champBlack text-2xl sm:text-3xl lg:text-4xl sticky top-0 py-5 bg-brand-black z-50 px-4 flex justify-between items-center'>
        <p>
          AGROTRACK 
        </p>
        <a
            href="https://agrotrack-app.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >

              <Link />
          </a>

      </div>

        {/* Apple-style image carousel */}
        <div className='w-full  px-4'>
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
              {[Images.ThirdFeatured, Images.ThirdFeatured2, Images.ThirdFeatured3, Images.ThirdFeatured4].map((image, index) => (
                <motion.div
                  key={index}
                  className='min-w-full snap-center sm:hidden'
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

              {[Images.SMThirdFeatured, Images.SMThirdFeatured2, Images.SMThirdFeatured3, Images.SMThirdFeatured4].map((image, index) => (
                <motion.div
                  key={index}
                  className='min-w-full snap-center hidden sm:block'
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={image}
                    width={1065}
                    height={325}
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

        <div className=' px-4 flex flex-col sm:flex-row sm:items-start gap-8'>
          <div className='space-y-4 flex-1 lg:sticky lg:top-12'>
            <p className='font-champBlack text-xl sm:text-2xl'>Conflict Prevention Web App</p>
            <motion.p
              className='text-sm sm:text-base'
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
          </div>

          <div className='space-y-6 flex-1'>
            <div className='space-y-4 sm:space-y-6'>
              <p className='text-sm sm:text-base font-semibold'>Key Contributions:</p>
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
                            className='rounded-full flex items-center justify-center text-sm sm:text-base bg-[#8BDFDD] text-brand-black min-w-6 min-h-6 w-6 h-6 mt-1'
                          >{paragraphIndex + 1}</div>

                          <motion.p className='text-sm sm:text-[15px] text-brand-white'>
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

            <div className='space-y-4 sm:space-y-6'>
              <p className='text-sm sm:text-base font-semibold'>Impact:</p>
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
                            className='rounded-full flex items-center justify-center text-sm sm:text-base bg-[#EDB88B] text-brand-black min-w-6 min-h-6 w-6 h-6 mt-1'
                          >{i + 1}</div>
                          <motion.p className='text-sm sm:text-[15px] text-brand-white'>{paragraph.split(' ').map((word, wordIndex) => (
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

export default ThirdFeaturedProject