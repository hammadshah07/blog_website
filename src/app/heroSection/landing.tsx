import React from 'react';
import Image from 'next/image';
import bg from "../../../images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3N0YXJ0dXBpbWFnZXNfcGhvdG9fb2ZfYV9kdW1iYmVsbF9wdXR0aW5nX29uX3RoZV9mbG9vcl9vZl9neW1faV9kN2ZmNWJjOS03ZTgwLTQ0MzQtOGQzOS1kOTg3Zjg1YzRjYmNfMS5qcGc.webp";

const Page = () => {
  return (
    <div className='w-full h-[500px] relative flex justify-between items-center'>
      <Image src={bg} alt='background' layout='fill' objectFit='cover' objectPosition='center' className='absolute z-0' />
      <div className='relative z-10 p-10'>
        <h1 className='font-extrabold text-[45px] text-white hover:text-[50px] transition-all duration-300'><span className='text-gray-800'>Build it </span>
           Powerful.<br />
          It’s Powerlift.
        </h1>
      </div>
    </div>
  );
};

export default Page;
