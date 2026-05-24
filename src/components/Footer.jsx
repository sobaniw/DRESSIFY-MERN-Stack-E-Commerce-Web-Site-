import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        {/* Left Section - Brand Name & Description */}
        <div>
          <div className='mb-5'>
            <span className='text-3xl font-bold tracking-widest text-gray-800'>
              DRESSIFY.
            </span>
            <span className='text-xs font-semibold tracking-widest text-gray-400 ml-1 align-top mt-1 inline-block'></span>
          </div>
          <p className='w-full md:w-2/3 text-gray-600'>
            Dressify brings you timeless fashion with a modern touch — designed to make every moment stylish.
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-000-000-0000</li>
            <li>contact@dressify.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright 2024© Dressify.com - All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer