import ReadingExperience from '@/component/LandingPage/FeaturedProject'
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
      <Stack />
      {/* <ReadingExperience /> */}
    </div>
  )
}

export default Page