import React from 'react'

const MyButton = ({children}) => {
  return (
    <button className='bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition duration-300'>
        {children}
    </button>
  )
};

export default MyButton