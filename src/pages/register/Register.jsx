import React from 'react'
import { Link } from 'react-router-dom'

// Register component for user registration
const Register = () => {
    return (
        <div className='h-screen bg-sky-300 flex items-center justify-center p-7 sm:p-4'>
            {/* Registration card container, uses flex row reverse to reverse the left side and right side of the registration card */}
            <div className="flex flex-wrap flex-row-reverse bg-white rounded-xl h-3/4 w-full sm:w-5/6 md:w-4/6 lg:w-4/6 overflow-hidden">
            {/* Left of the registration card with background image and gradient, hidden on small screens */}
                <div className='hidden sm:flex sm:w-1/2 bg-register-bg bg-cover'>
                    <div className="flex justify-center h-full w-full bg-gradient-to-b from-sky-50 to-sky-20 p-8 flex-col gap-4 sm:gap-7 text-white">
                        <h1 className='text-4xl lg:text-6xl'>Connectify</h1>
                        <p className='text-base lg:text-lg'>Your gateway to deeper and more meaningful connections.</p>
                        <span className='text-base lg:text-lg'>Do you have an account?</span>
                        <Link to='/login'>
                        <button className='text-base w-full sm:w-1/2 p-2 border-0 bg-white text-sky-600 hover:bg-sky-600 hover:text-white transition rounded-md font-bold cursor-pointer'>
                            Login
                        </button>
                        </Link>
                        
                    </div>
                </div>

                {/* Righ side of the registration card with form. visible on all screens */}
                <div className="w-full sm:w-1/2 flex justify-center p-8 flex-col gap-4 sm:gap-7 ">
                {/* Register header, hidden on small screens */}
                    <h1 className='font-bold hidden sm:block text-sky-600 opacity-80 text-xl sm:text-2xl'>Register</h1>
                    {/* Application name, visible only on small screen */}
                    <h1 className='font-semibold sm:hidden text-sky-600 opacity-80 text-2xl sm:text-3xl'>Connectify</h1>
                    {/* Registration form */}
                    <form className='flex flex-col gap-4 sm:gap-7 items-start' >
                        <input type="text" placeholder='Username' className='border-b py-2 px-2 w-full outline-none' />
                        <input type="email" placeholder='Email' className='border-b py-2 px-2 w-full outline-none' />
                        <input type="password" placeholder='Password' className='border-b py-2 px-2 w-full outline-none' />
                        <input type="text" placeholder='Confirm Password' className='border-b py-2 px-2 w-full outline-none' />
                        <button className='text-base w-full sm:w-1/2 py-2 hover:border hover:border-sky-600 bg-sky-600 text-white hover:bg-white hover:text-sky-600 transition rounded-md font-bold cursor-pointer'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register