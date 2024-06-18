import React from 'react'

const Register = () => {
  return (
    <div className='h-screen bg-sky-300 flex items-center justify-center p-7 sm:p-4'>
        <div className="flex flex-wrap flex-row-reverse bg-white rounded-xl h-3/4 w-full sm:w-5/6 md:w-4/6 lg:w-4/6 overflow-hidden">
            <div className='hidden sm:flex sm:w-1/2 bg-login-bg bg-cover'>
             <div className="flex justify-center h-full w-full bg-gradient-to-b from-sky-50 to-sky-20 p-8 flex-col gap-4 sm:gap-7 text-white">
                <h1 className='text-4xl lg:text-6xl'>Connectify</h1>
                <p className='text-base lg:text-lg'>Your gateway to deeper and more meaningful connections.</p>
                <span className='text-base lg:text-lg'>Don't have an account?</span>
                <button className='text-base w-full sm:w-1/2 p-2 border-0 bg-white text-sky-600 hover:bg-sky-600 hover:text-white transition rounded-md font-bold cursor-pointer'>
                    Register
                </button>
             </div>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center p-8 flex-col gap-4 sm:gap-7 ">
                <h1 className='font-bold hidden sm:block text-sky-600 opacity-80 text-xl sm:text-2xl'>Login</h1>
                <h1 className='font-semibold sm:hidden text-sky-600 opacity-80 text-2xl sm:text-3xl'>Connectify</h1>
                <form className='flex flex-col gap-4 sm:gap-7 items-start' >
                    <input type="text" placeholder='Username' className='border-b py-2 px-2 w-full outline-none'/>
                    <input type="password" placeholder='Password' className='border-b py-2 px-2 w-full outline-none' />
                    <button className='text-base w-full sm:w-1/2 py-2 hover:border hover:border-sky-600 bg-sky-600 text-white hover:bg-white hover:text-sky-600 transition rounded-md font-bold cursor-pointer'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register