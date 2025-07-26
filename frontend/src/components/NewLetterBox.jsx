import React from 'react'

const NewLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault(); // will not relode the web page 
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20 % off </p>
        <p className='tex-gray-400 mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
            <input type='email' placeholder='Enter yur email' className='w-full sm:flex-1 outline-none'  required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'> SUBSCRIBE</button>

        </form>

    </div>
  )
}

export default NewLetterBox