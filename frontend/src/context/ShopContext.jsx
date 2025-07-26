import { createContext, useEffect, useState } from "react";
import { products } from "../assets /frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10 ; 

    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);

    // add to cart functionality
    const [cartItems , setCartItems] = useState({});

    const navigate = useNavigate();

    const addToCart = async(itemId , size) => {
        if(!size){
            toast.error('Select Product size firstly');
            return;
        }
        let cartData = structuredClone(cartItems);
        // copy the cartItem object using structuredClone
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size]= 1;

            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0 ;

        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0 ){
                        totalCount+= cartItems[items][item];
                    }
                }catch(error){
                     console.log('error occured ======================');
                     console.log(error);
                     console.log('====================================');
                }
            }
        }
        return totalCount;
    }

    useEffect(() => {
        console.log('====================================');
        console.log(cartItems);
        console.log('====================================');
    } , [cartItems])

    const updateQuantity = async(itemId , size , quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
        console.log("cartItem " , cartItems)
        console.log(products);
    }

    const getCartAmount = () => {
        let totalAmount = 0 ; 
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items );
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0 ){
                        totalAmount += itemInfo.price * cartItems[items][item];
                        console.log("cartItems[item] = " , cartItems[item]);
                    }
                }catch(error){
                    return error;
                }
            }
        }

        return totalAmount;
    }

    const value = {
        products, currency , delivery_fee , 
        search , setSearch , 
        showSearch , setShowSearch,
        cartItems , addToCart,
        getCartCount , 
        updateQuantity,
        getCartAmount ,
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;