import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets /frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId } = useParams();
  //console.log(productId);
  const {products , currency , addToCart } = useContext(ShopContext);
  const [productData , setProductData] = useState(false);
  const [image , setImage]  = useState('');

  const [size , setSize] = useState('')


  const fetchProductData = async() => {
    products.map((item) =>{
      if(item._id === productId){
        // set the product in productData state
        setProductData(item)
        //console.log(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() =>{
    fetchProductData();
  } , [productId , products])


  return  productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap12 flex-col sm:flex-row'>
          {/* Product images */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-between sm:w-[18.7%] w-full'>
                {
                  productData.image.map((item , index) => (
                    <img onClick={() =>setImage(item)} src={item} key={index} className='w-[] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                  ))
                }

            </div>
            <div className='w-full sm:w-[80%]'>
                <img src={image} className='w-full h-auto '/>

            </div>
          </div>  
           {/* ------------ product infor--------------- */}
           <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                  <img className='w-3.5' src={assets.star_icon} alt=''/>
                  <img className='w-3.5' src={assets.star_icon} alt=''/>
                  <img className='w-3.5' src={assets.star_icon} alt=''/>
                  <img className='w-3.5' src={assets.star_icon} alt=''/>
                  <img className='w-3.5' src={assets.star_dull_icon} alt=''/>
                  <p className='pl-2'>{122}</p>

                </div>
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-600 md:w-3/4'>{productData.description}</p>
                
                <div className='flex flex-col gap-4 my-8'>
                  <p > SElect Size</p>
                  <div className='flex gap-2 '>
                    {productData.sizes.map((item ,index) => (
                      <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                    ))}

                  </div>
                  
                  <button onClick={() => addToCart(productData._id , size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add to Cart</button>

                  <hr className='mt-8 sm:w-4/5 '/>

                  <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p className=''> 100 % original product</p>
                    <p className=''> Cash on delivery is available on the this product .</p>
                    <p className=''> Easy return and exchange whithin 7 days.</p>
                  </div>

                </div>
           </div>
      </div>

       {/* Description and review section */}

       <div className='mt-20'>
          <div className='flex '>
              <b className='border px-5 py-3 text-sm '> Description</b>
              <p className='border px-5 py-3 text-sm '> Reviews (122)</p>
            
          </div>

          <div className='flex flex-col gap-4 border py-6 px-6 text-sm text-gray-500'>
            <p> An e-commerce website is an online platform that facilitates the buying and selling the products to the customer in most efficient way </p>
            <p>E-commerce websites typically display products or services along with detailed description of the products , with reviews and feedback of the customers </p>

          </div>
       </div>

       {/* --------------- display related products------------ */}
       <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : <div className='opacity-0'></div> 
  // if we are not getting the product data
}

export default Product