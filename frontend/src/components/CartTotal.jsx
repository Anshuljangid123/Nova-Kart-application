import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    return (
        <div className='w-full px-4 py-6 bg-white rounded-md shadow-md'>
            <div className='text-2xl mb-4'>
                <Title text1={'CART'} text2={'TOTAL'} />
            </div>
            <div className='flex flex-col gap-4 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {getCartAmount()}.00</p>
                </div>
                <hr className='border-gray-300' />
                <div className='flex justify-between'>
                    <p>Shipping fee</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>
                <hr className='border-gray-300' />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
