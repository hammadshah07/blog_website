// components/Header.js
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from "../../../images/ec86a121afdc2f4e6b8eaf2d4ac49842.png"

const Header = () => {
  return (
    <div className='w-full h-[60px] flex justify-between bg-orange-500 px-10'>
      <div className='flex items-center space-x-1'>
        <Image src={logo} alt='logo' width={100} height={50} />
        <h1 className='font-bold text-[24px] text-white'>Hammad&apos;s Health Hub</h1>
      </div>
      <div>
        <ul className='flex space-x-4 items-center mt-4 text-white text-[18px]'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="blog">Blog</Link></li>
          <li><Link href="about">About</Link></li>
          <li><Link href="contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
