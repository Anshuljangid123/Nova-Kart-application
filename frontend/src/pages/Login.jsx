import React, { useState } from 'react'

const Login = () => {
  const [currState , setCurrState] = useState('Sign up');
  const onSubmitHandler = async(e) => {
    e.preventDefault();

  }

  return (
    <form onSubmit={onSubmitHandler()} className='flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currState}</p>
        <hr className='border-node h-[1.5px] w-8 bg-gray-800'/>

      </div>
      {currState === 'Login' ? '' : <input type='text' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name'  required/> }
      <input type='email' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required/>
      <input type='password' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required/>

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget your password ?</p>
        {
          currState === 'Login' 
          ? <p className='cursor-pointer' onClick={() => setCurrState('Sign up')}>Create account</p>
          : <p className='cursor-pointer' onClick={() => setCurrState('Login')}>Login</p>
        }

      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currState === 'Login' ? 'Sign in' : 'Sign up'}</button>

      
    </form>
  )
}

export default Login