import { LabelOne } from '@/assets/svg'
import React from 'react'

const Introduction = () => {
  return (
    <div className='h-screen bg-[#FDF9F0] rounded-t-[16px] sticky top-0'>
        <div>
          <LabelOne />
          <p className='rounded-[12px] border border-brand-black text-branded-black font-semibold text-base'>Introduction</p>
        </div>
    </div>
  )
}

export default Introduction