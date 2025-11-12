import { Images } from '@/assets/png'
import { Hamburger, X } from '@/assets/svg'
import Image from 'next/image'
import React, { useState } from 'react'

const Header = ({ className }: { className: string }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [activeItem, setActiveItem] = useState('About Me')

  const MenuItems = [
    { label: 'About Me', href: '#introduction' },
    { label: 'Featured Projects', href: '#featured' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#finally' },
  ]

  // Toggle menu open/close
  const handleMenuToggle = () => {
    setOpenMenu(prev => {
      const newState = !prev
      if (newState) setActiveItem('About Me')
      return newState
    })
  }

  // Handle item click (activate + close)
  const handleItemClick = (label: string) => {
    setActiveItem(label)
    setOpenMenu(false)
  }

  return (
    <>
      {/* Header Bar */}
      <div
        className={`bg-[#232323] border border-[#313131] flex items-center justify-center self-center px-4 py-1.5 space-x-3 rounded-[12px] relative z-50 ${className}`}
      >
        <Image src={Images.Logo} width={35} height={35} alt='Logo' />
        <button onClick={handleMenuToggle} className='cursor-pointer'>
          <Hamburger />
        </button>
      </div>

      {/* Menu Overlay */}
      {openMenu && (
        <>
          {/* Dim Background */}
          <div
            className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 h-full'
            onClick={() => setOpenMenu(false)} // close when clicking background
          />

          {/* Menu Container */}
          <div className='absolute bottom-8 right-8 left-8 z-50 text-center mx-auto'>
            {/* Cancel Button */}
            <div className='flex relative'>
              <button
                onClick={handleMenuToggle}
                className='cursor-pointer absolute -top-10 right-0 left-0 mx-auto rounded-full w-7 h-7 min-w-7 min-h-7 max-h-7 max-w-7 font-bold bg-[#17BEBB] flex items-center justify-center shadow-md'
              >
                <X className='w-4 h-4 text-white' />
              </button>
            </div>

            {/* Menu Box */}
            <div className='bg-[#141414] border border-[#313131] rounded-[16px] px-2 py-3 shadow-lg space-y-2'>
              {MenuItems.map(menu => (
                <a
                  key={menu.href}
                  href={menu.href}
                  onClick={() => handleItemClick(menu.label)}
                  className={`block font-semibold text-sm px-4 py-3 rounded-[10px] transition-all duration-200
                    ${
                      activeItem === menu.label
                        ? 'bg-[#F3C7DE] text-[#141414]'
                        : 'text-brand-white hover:bg-[#F3C7DE] hover:text-[#141414]'
                    }`}
                >
                  {menu.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
