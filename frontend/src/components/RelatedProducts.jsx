import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ( {category , subCategory}) => {
    const {products } = useContext(ShopContext);
    const [related , setRelated] = useState([]);

    useEffect(() => {
        //  filter the products using category and subcategory
        if(products.length > 0 ){
            let productsCopy = products.slice(); // create copy of all the products
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory );

            //console.log(productsCopy.slice(0 , 5));
            setRelated(productsCopy.slice(0,5));
        }
    } , [products])
    
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2 '>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4gap-y-6'>
            {related.map((item , index) => (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))}

        </div>
    </div>
  )
}

export default RelatedProducts