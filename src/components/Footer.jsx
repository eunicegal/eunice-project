import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
              <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                lorem ipsum is simply dummy of the printing and typesetting industry 
                lorem ipsum is simply dummy of the printing and typesetting industry..  
                </p>
              </div>
              <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>HOME</li>
                      <li>ABOUT US</li>
                      <li>DELIVERY</li>
                      <li>PRIVACY POLICY</li>
                </ul>
              </div>

              <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+23445678930</li>
                    <li>contact@gmail.com</li>

                </ul>
              </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ contact.com -All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
