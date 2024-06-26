import React, { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import Brightness4OutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const { currentUser } = useContext(AuthContext);
  const { toggle , darkMode } = useContext(DarkModeContext);

  const toggleHandle = () => {
    toggle();
  }

  return (
    <div className='dark:bg-black dark:text-white flex items-center justify-between px-5 py-3 h-14 border-b sticky top-0 bg-white z-10'>
      {/* Leftside of navbar */}
      <div className='flex items-center gap-7'>
        <Link to='/'>
        <span className='font-bold text-xl text-sky-600 dark:text-white '>Connectify</span>
        </Link>
        <Link to='/' >
        <HomeOutlinedIcon/>
        </Link>
        {/* Dark or light mode icon */}
        {darkMode ? <Brightness3OutlinedIcon onClick={toggleHandle} className='cursor-pointer' /> : <Brightness4OutlinedIcon onClick={toggleHandle} className='cursor-pointer' /> }
        <WidgetsOutlinedIcon/>
        {/* Container div for search icon and search box */}
        <div className='flex items-center gap-2 border rounded-md p-2'>
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search' className='outline-none w-96 hidden lg:flex bg-transparent' />
        </div>
      </div>
      {/* Rightside of navbar */}
      <div className='hidden sm:flex items-center gap-7'>
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        {/* Container div for profile image and profile name */}
        <div className='flex items-center gap-3'>
          <img src={'http://localhost:8800/images/'+currentUser.profilePic} alt="" className='w-8 h-8 rounded-full object-cover' />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar