import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets /frontend_assets/assets'
import NewLetterBox from '../components/NewLetterBox'

const Contact = () => {
  return (
    <div className=''>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>

      </div>
      <div className='y-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px] '/>
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600 '>Our Store</p>
            <p className='text-gray-500'> 5234 Williams Station <br/> Suiter 350 Washingtomn USA</p>
            <p className='text-gray-500'>Tel: (+91) 1234567890 <br/> Email : admin@forever.com</p>
            <p className='font-semibold text-xl text-gray-600'> Carrers at Forever</p>
            <p className='text-gray-500'> Learn more about us</p>
            <button className='border border-black px-8 py-4  text-sm hover:bg-black hover:text-white transition'>Explore Jobs </button>
          </div>

      </div>
      <NewLetterBox/>
    </div>
  )
}

export default Contact