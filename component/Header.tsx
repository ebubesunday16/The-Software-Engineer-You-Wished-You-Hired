import { Images } from '@/assets/png'
import { Hamburger } from '@/assets/svg'
import Image from 'next/image'
import React from 'react'

const Header = ({ className }: { className: string }) => {
  return (
    <div className={`bg-[#232323] border border-[#313131]  flex items-center justify-center self-center px-4 py-1.5 space-x-3 rounded-[12px] ${className}`}>
      <Image 
        src={Images.Logo}
        width={35}
        height={35}
        alt='Logo'
      />
      <div>
        <Hamburger />
      </div>

    </div>
  )
}

export default Header