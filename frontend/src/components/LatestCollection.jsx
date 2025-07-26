import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { useEffect } from 'react'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    //console.log(products);
    const [latestProducts , setLatestProducts] = useState([]);
    
    useEffect(()=>{
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

        {/* rendering products */}
        <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item , index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }

        </div>


    </div>
  )
}

export default LatestCollection