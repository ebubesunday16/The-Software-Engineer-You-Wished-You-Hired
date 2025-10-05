'use client'
import { Images } from '@/assets/png'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { span } from 'motion/react-client'

const FeaturedProject = () => {

  const Contributions = [
    'Built and deployed the full MVP using Next.js for the frontend and Supabase for backend services.',
    'Engineered a secure and scalable architecture supporting real-time data sync and audio transcription.',
    'Integrated AI-powered transcription and text-to-SOAP formatting to streamline documentation workflows.',
    'Designed a clean and responsive interface with Tailwind CSS, optimized for speed and usability.',
    'Implemented authentication, role-based permissions, and protected routes to ensure data security.',
    'Collaborated closely with clinicians to refine template design and note structure for practical, real-world use.',
    'Managed version control, deployment, and feature iteration to align with clinical user feedback.'
  ]

  const Impact = [
    'Reduced note creation time by over 40% for early clinical testers.',
    'Provided a unified tool for voice, audio, and text-based SOAP documentation.',
    'Helped professionals focus more on patient care and less on repetitive documentation.'
  ]

  const description =  `
  Soapnotes.doctor is a web application built for healthcare professionals to simplify clinical documentation. It enables providers to record, upload, or write rough clinical notes, which are then transcribed and structured automatically into standardized SOAP formats.
  `

  const splitDescription = description.split(' ')


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
        delayChildren:  (splitDescription.length * 0.01)
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

  return (
    <div className='text-brand-white px-4 space-y-8 pb-32'>
      <div className='font-champBlack text-2xl sticky top-0 py-5  bg-brand-black  '>
        Featured Project
      </div> 
      <motion.div 
        className=''
        initial={{
          scale: 0.9
        }}
        whileInView={{
          scale: 1
        }}
        transition={{ 
          duration: 0.4, 
          ease: 'easeOut' 
        }}
        viewport={{
          once: true
        }}
        >
        <Image 
          src={Images.Featured}
          width={390}
          height={250}
          alt='featured image'
          className='w-full'
        />
      </motion.div> 
      <div className='space-y-4'>
        <p className='font-champBlack text-lg '>SoapNotes Doctor</p>
        <motion.p 
        className='text-sm'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{
          once: true
        }}
        
        >
          {
            splitDescription.map((item) => (
              <motion.span 
              variants={wordVariants}
              >
                {item + ' '}
              </motion.span>
            ))
          }
        </motion.p>
        
        <div className='space-y-6'>
          <div
            className='space-y-8'
          >
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

          <div
            className='space-y-8'
          >
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
                        className='flex items-start gap-x-4 pl-4'
                        viewport={{ once: true }}
                      
                      >
                        <div
                          className='rounded-full flex items-center justify-center text-sm bg-[#EDB88B] text-brand-black min-w-6 min-h-6 w-6 h-6 mt-1'
                        >{i + 1}</div>
                        <motion.p className='text-sm'>{paragraph.split(' ').map((word) => (
                          <motion.span
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