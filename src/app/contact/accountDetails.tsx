import React from 'react';


const ContactDetail = () => {
  return (
    <div className='w-full h-[700px] flex justify-between p-10'>
      <div className='flex flex-col items-center w-full'>
        {/* Centered Heading and Paragraph */}
        <div className='text-center mb-10'>
          <h1 className='font-semibold text-[24px]'>Get In Touch With Us</h1>
          <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero dicta temporibus nulla, impedit officia.</p>
        </div>
        {/* Input Section */}
        <div className='flex-col'>
          <div className='w-[300px]'>
            <p className='text-[15px] my-1'>Your name</p>
            <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Your Name' />
            <p className='text-[15px] my-1'>Email Address</p>
            <input type='email' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Email Address' />
            <p className='text-[15px] my-1'>Subject</p>
            <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Subject (Optional)' />
            <p className='text-[15px] my-1'>Message</p>
            <textarea className='w-full h-[60px] my-2 border border-black rounded px-2' placeholder='Hi, I\d like to ask about...'></textarea>
            <button className='w-full h-[40px] bg-orange-500 hover:bg-orange-700 text-white rounded-2xl mt-4'>Submit</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ContactDetail;
