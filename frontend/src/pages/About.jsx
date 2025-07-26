import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets /frontend_assets/assets'
import NewLetterBox from '../components/NewLetterBox'

const About = () => {

  return (
    <div className=''>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Hello consumers , this is the Nova Kart applicaiton , popular for its easy and progressive ui and functionalities , you can buy the products and also sell the products on this website </p>
            <p>All the facilites like return policy and replacement in available on all the products </p>

            <b className='text-gray-800 '>Our Mission</b>
            <p>Our mission is to empower the customer with choice with all the brands and trends , all generation can look for the required design </p>

        </div>
      </div>
      <div className='tet-4xl py-4 '>
        <Title text1={'Why'} text2={'CHOOSE US'}/>  

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-2  '>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col m-2 gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We menticuously select and vet each product to ensure it meets our stringent Quality Standards.</p>

        </div>

        <div className='border px-10 md:px-16 sm:py-20 flex flex-col m-2 gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600' > With our user friendly interface and hassle-free ordering process and explerience.</p>
        </div>

         <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5 m-2'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'> Our team of dedicated professionals is here to assist you the way , ensuring proper problem  solving .</p>
        </div>

      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About