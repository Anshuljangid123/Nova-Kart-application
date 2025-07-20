import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    //console.log(products);
    const {latestProducts , setLatestProducts} = useState([]);
    
    useEffects(()=>{
        setLatestProducts(products.slice(0 , 10 )); // get the 10 products form products
    },[])// executed only once

  return (
    <div className='my-10 '>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Hello ! this is a website name Nova Kart which is a standard e-commerse website possessing all the functionalities required for shopping experience and for the admin pannal 
            </p>
        </div>
        


    </div>
  )
}

export default LatestCollection