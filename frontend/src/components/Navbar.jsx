import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-200'>
        <div className='flex justify-between px-8 mx-auto w-11/12 py-2'>
            <div>
                <h1 className='text-2xl font-bold text-black'>School website</h1>
            </div>
            <div className='flex space-x-5'>
                <button className='border rounded-lg px-2 py-1.5 text-blue-500 hover:text-white hover:bg-blue-400'>Login</button>
                <button className='border rounded-lg px-2 py-1.5 bg-blue-400 text-white hover:bg-green-200 hover:text-blue-400'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar