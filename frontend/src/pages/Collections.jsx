import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets /frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collections = () => {
    const {products , search , showSearch } = useContext(ShopContext);
    const [showFilter , setShowFilter] = useState(false);
    const [filterProducts , setFilterProducts] = useState([]);
    const [category , setCategory] = useState([]);
    const [subCategory , setSubCategory]  = useState([]);
    const [sortType , setSortType]  = useState('relevant');

    const toggleCategory = (e ) => {
        if(category.includes(e.target.value)){
            // if the category is already avalilable in the category state
            setCategory(prev => prev.filter(item=> item != e.target.value));
            //Keep all items except the one equal to the clicked value. So this effectively removes that value from the array.
        }
        else{
            // add this category in the array 
            setCategory(prev => [...prev , e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
        if(subCategory.includes(e.target.value)){
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else{
            setSubCategory(prev => [...prev , e.target.value])
        }
    }

    const applyFilter = () => {
        let productsCopy = products.slice(); // this will create a copy of products array in this variable 

        // we want to display the products related to the search query
        if(showSearch && search){
            // filter the products 
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        if(category.length > 0 ){
            // we have selected some category 
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if(subCategory.length >0 ){
            // we have selected subcategory in filters
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProducts(productsCopy)
    }

    const sortProducts = () => {
        let fpCopy = filterProducts.slice();

        switch(sortType){
            case 'low-high':
                setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price) ));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)))
                break;
            default:
                applyFilter();
                break;
        }
    }

    useEffect(() => {
        applyFilter();
    } , [category , subCategory , search , showSearch])

    useEffect(() => {
        sortProducts();
    } , [sortType])
    // useEffect(() => {
    //     console.log("Selected Subcategories:", subCategory);
    //     console.log("Product Subcategories:", products.map(p => p.subCategory));
    //     applyFilter();
    // }, [category, subCategory]);


    // useEffect(() => {
    //     setFilterProducts(products);
    // } , [])

    // useEffect(() => {
    //     setFilterProducts(products);
    // } , [])

    // useEffect(() =>{
    //     console.log(category);
    // } , [category])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* filter options */}
        <div className='min-2-60'>
            <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                FILTERS
                <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
            
            </p>
            {/* catigory filter */}
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden' } sm:block `}>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2 '>
                        <input className='w-3 ' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
                    </p>

                    <p className='flex gap-2 '>
                        <input className='w-3 ' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
                    </p>

                    <p className='flex gap-2 '>
                        <input className='w-3 ' type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
                    </p>


                </div>
            </div>

            {/* subcategory filter */}

            <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden' } sm:block `}>
                <p className='mb-3 text-sm font-medium'>TYPES</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2 '>
                        <input className='w-3 ' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> TopWear
                    </p>

                    <p className='flex gap-2 '>
                        <input className='w-3 ' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> BottomWear
                    </p>

                    <p className='flex gap-2 '>
                        <input className='w-3 ' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> WinterWear
                    </p>


                </div>
            </div>

        </div>

        {/* right side ui  */}
        <div className='flex-1 '>
            <div className='flex justify-between text-base sm:text-2xl mb-4'>
                <Title text1={'ALL'} text2={'COLLECTIONS'}/>
                {/* Products Sort */}
                <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                    <option value="relevent">Sort by Relevent </option>
                    <option value="low-high">Sort by Low to High</option>
                    <option value="high-low">Sort by High to Low</option>
                </select>

            </div>

            {/* map produts  */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {/* map all the products */}
                {
                    filterProducts.map((item, index) =>(
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                    ))
                }
            </div>

        </div>

    </div>
  )
}

export default Collections