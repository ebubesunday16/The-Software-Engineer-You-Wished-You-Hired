'use client'
import { Images } from '@/assets/png'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Link } from '@/assets/svg'
import { useRouter } from 'next/navigation'

const FeaturedProject = () => {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const imageCount = 4 // Update this based on your actual images

  const Contributions = [
    'Built the full MVP using Next.js for frontend and Supabase (Auth, Database, Storage) for backend services.',
    'Designed a secure architecture supporting real-time data sync and audio transcription.',
    'Integrated AI transcription (Whisper/OpenAI) and automated conversion of raw notes into structured SOAP format.',
    'Created a clean and responsive interface with Tailwind CSS optimized for usability and speed.',
    'Implemented authentication and role-based permissions to ensure secure access to sensitive data.',
    'Collaborated with clinicians to refine templates and note structures for practical use.',
    'Managed version control, deployments, and iterative improvements based on user feedback.'
  ];
  
  const Impact = [
    'Reduced note creation time by 40%+ for early clinical testers.',
    'Provided a unified tool for voice, audio, and text-based SOAP documentation.',
    'Helped clinicians focus more on patient care and less on repetitive documentation.'
  ];
  
  const description = `
  Soapnotes.doctor is a web application built for healthcare professionals to simplify clinical documentation. 
  It enables providers to record, upload, or write rough clinical notes, which are then transcribed and structured automatically into standardized SOAP formats.
  `;
  

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

  const router = useRouter()

  return (
    <div 
    
      className='text-brand-white space-y-8 pb-32 max-w-[1200px] mx-auto'
      id='featured'
      >
      <div className='font-champBlack text-2xl sm:text-3xl lg:text-4xl sticky top-0 py-5 bg-brand-black z-50 px-4 flex justify-between items-center'>
        <p>
          SOAPNotes Doctor
        </p>
        <a
            href="https://soapnotes.doctor"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >

              <Link />
          </a>

      </div>

      {/* Apple-style image carousel */}
      <div className='px-4 w-full'>
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
            {[Images.Featured, Images.Featured2, Images.Featured3, Images.Featured4].map((image, index) => (
              <motion.div
                key={index}
                className='min-w-full sm:hidden snap-center'
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

            {[Images.SMFeatured, Images.SMFeatured2, Images.SMFeatured3, Images.SMFeatured4].map((image, index) => (
              <motion.div
                key={index}
                className='min-w-full hidden sm:block snap-center'
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

      <div className='flex flex-col sm:flex-row sm:items-start px-4 gap-8'>
        <div className='space-y-4 flex-1 lg:sticky lg:top-12'>
          <p className='font-champBlack text-xl sm:text-2xl'>AI-powered Clinical Documentation Platform</p>
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
            <p className='text-sm s:text-base font-semibold'>Impact:</p>
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
    </div>
  )
}

export default FeaturedProject