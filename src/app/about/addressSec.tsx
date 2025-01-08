import React from 'react'
import Image from "next/image";
import add from "../../../images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3N0YXJ0dXBpbWFnZXNfcGhvdG9fb2ZfYV9kdW1iYmVsbF9wdXR0aW5nX29uX3RoZV9mbG9vcl9vZl9neW1faV9kN2ZmNWJjOS03ZTgwLTQ0MzQtOGQzOS1kOTg3Zjg1YzRjYmNfMS5qcGc.webp";
import Link from "next/link";

const AddressSec = () => {
  return (
    <div className="relative w-full h-[300px]  flex justify-between items-center">
      {/* Background Image */}
      <Image src={add} alt="picture" layout='fill' objectFit='cover' objectPosition='center' className='absolute z-0'/>
      <div className="absolute inset-0 flex flex-col justify-center items-center mb-20">
        {/* Shop Heading */}
        <h2 className="text-white text-[50px] font-bold"><span className='text-gray-800'>Ab</span>
            out</h2>
        {/* Breadcrumb Navigation */}
        <div className="flex text-white text-[15px] mt-2 space-x-2 pt-2 hover:text-[20px] duration-100">
          <Link href="/">Home</Link>
          <span>{'>'}</span>
          <span>About</span>
        </div>
      </div>
    </div>
  )
}

export default AddressSec

