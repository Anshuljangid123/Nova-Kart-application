import React from 'react'
import { assets } from '../assets /frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt=''/>
                <p className='w-full md:w-2/3 text-gray-600'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'> GET IN TOUCH </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1 -212-456-7890</li>
                    <li>contact@foreveryou.com</li>

                </ul>
            </div>

            <div>
                <hr/>
                <p className='py-5 text-sm text-center'> Copright 2024 nova.com - All Rights Reserved</p>
                
            </div>

        </div>
    </div>
  )
}

export default Footer