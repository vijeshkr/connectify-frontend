import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

// Login component for user authentication
const Login = () => {

        const navigate = useNavigate();

        const { login } = useContext(AuthContext);
        const [inputs, setInputs] = useState({
            username:'',
            password:''
        });
        const [err, setErr] = useState(null);

        const handleChange = (e) => {
            setInputs((prev) => ({...prev,[e.target.name]:e.target.value}))
        };

        const handleLogin = async (e) => {
            e.preventDefault();
            try {
               await login(inputs);
               navigate('/');
            } catch (err) {
                setErr(err.response.data);
            }
        };

  return (
    <div className='h-screen bg-sky-300 flex items-center justify-center p-7 sm:p-4'>
        <div className="flex flex-wrap bg-white rounded-xl h-3/4 w-full sm:w-5/6 md:w-4/6 lg:w-4/6 overflow-hidden">
        {/* Left side of the login card with background image and gradient, hidden in the small screens */}
            <div className='hidden sm:flex sm:w-1/2 bg-login-bg bg-cover'>
             <div className="flex justify-center h-full w-full bg-gradient-to-b from-sky-50 to-sky-20 p-8 flex-col gap-4 sm:gap-7 text-white">
                <h1 className='text-4xl lg:text-6xl'>Connectify</h1>
                <p className='text-base lg:text-lg'>Your gateway to deeper and more meaningful connections.</p>
                <span className='text-base lg:text-lg'>Don't have an account?</span>
                <Link to='/register'>
                <button className='text-base w-full sm:w-1/2 p-2 border-0 bg-white text-sky-600 hover:bg-sky-600 hover:text-white transition rounded-md font-bold cursor-pointer'>
                    Register
                </button>
                </Link>
                
             </div>
            </div>
            {/* Right side of the login card with login form, visible on all screens */}
            <div className="w-full sm:w-1/2 flex justify-center p-8 flex-col gap-4 sm:gap-7 ">
            {/* Login header, hidden on small screens */}
                <h1 className='font-bold hidden sm:block text-sky-600 opacity-80 text-xl sm:text-2xl'>Login</h1>
                {/* Application name, visible only on small screens */}
                <h1 className='font-semibold sm:hidden text-sky-600 opacity-80 text-2xl sm:text-3xl'>Connectify</h1>
                {/* Login form */}
                <form className='flex flex-col gap-4 sm:gap-7 items-start' >
                    <input name='username' onChange={handleChange} type="text" placeholder='Username' className='border-b py-2 px-2 w-full outline-none'/>
                    <input name='password' onChange={handleChange} type="password" placeholder='Password' className='border-b py-2 px-2 w-full outline-none' />
                    { err && <p className='text-sm text-red-600'>{err}</p>}
                    <button onClick={handleLogin} className='text-base w-full sm:w-1/2 py-2 hover:border hover:border-sky-600 bg-sky-600 text-white hover:bg-white hover:text-sky-600 transition rounded-md font-bold cursor-pointer'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
