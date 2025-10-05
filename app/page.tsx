import FeaturedProject from '@/component/LandingPage/FeaturedProject'
import ReadingExperience from '@/component/LandingPage/FeaturedProject'
import Finally from '@/component/LandingPage/Finally'
import FunFact from '@/component/LandingPage/FunFact'
import Introduction from '@/component/LandingPage/Introduction'
import Stack from '@/component/LandingPage/Stack'
import ZoomZoom from '@/component/LandingPage/ZoomZoom'
import React from 'react'

const Page = () => {
  return (
    <div>
      <ZoomZoom />
      <FunFact />
      <Introduction />
      <FeaturedProject />
      <div className='flex flex-col gap-4'>
        <Stack />
        <Finally />
      </div>
      {/* <ReadingExperience /> */}
    </div>
  )
}

export default Page