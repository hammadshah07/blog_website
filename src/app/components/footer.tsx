import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../images/ec86a121afdc2f4e6b8eaf2d4ac49842.png"

const Footer = () => {
  return (
    <div className='w-full h-[300px] flex flex-col items-center bg-orange-500 text-white'>
      <div className='w-full max-w-6xl flex justify-between p-5'>
        {/* Address Section */}
        <div className='flex flex-col items-center justify-center text-center'>
          <Image src={logo} alt='logo' width={300} height={300} />
        </div>

        <div className='flex flex-col items-center space-y-3'>
          <h3 className=' text-[20px]'>Links</h3>
          <Link href="/" className="hover:text-[24px] transition-colors duration-300">Home</Link>
          <Link href="/blog" className="hover:text-[24px] transition-colors duration-300">Blog</Link>
          <Link href="/about" className="hover:text-[24px] transition-colors duration-300">About</Link>
          <Link href="/contact" className="hover:text-[24px] transition-colors duration-300">Contact</Link>
        </div>

        {/* Help Section */}
        <div className='flex flex-col items-center space-y-3'>
          <h3 className='text-[20px]'>Support</h3>
          <ul className='space-y-3'>
            <li className='text-[15px]'>Terms of Use</li>
            <li className='text-[15px]'>FAQ</li>
            <li className='text-[15px]'>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className='flex flex-col items-center space-y-3'>
          <h2 className=' text-[20px]'>Newsletters</h2>
          <div className='flex items-center space-x-3'>
            <input
              type='email'
              placeholder=' Enter Your email address'
              className='border-0 border-b border-gray-500 p-2 w-[200px] text-[13px] focus:ring-0 focus:outline-none'
            />
            <p className='font-semibold underline underline-offset-4 '>Subscribe</p>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className='w-[1100px] border-t-2 border-gray-300 mt-10' />
      <div className='w-full max-w-6xl px-5 pt-3 text-gray-900'>
        © {new Date().getFullYear()} Your Website. All rights reserved.</div>
    </div>
  );
};

export default Footer;






{/* <div className="flex space-x-4">
<Link href="/" className="hover:text-gray-400 transition-colors duration-300">Home</Link>
<Link href="/about" className="hover:text-gray-400 transition-colors duration-300">About</Link>
<Link href="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</Link>
<Link href="/blog" className="hover:text-gray-400 transition-colors duration-300">Blog</Link>
</div> */}

{/* <div className="text-gray-400">
© {new Date().getFullYear()} Your Website. All rights reserved.
</div> */}