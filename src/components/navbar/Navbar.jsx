import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 py-3 h-14 border-b sticky top-0 bg-white '>
      {/* Leftside of navbar */}
      <div className='flex items-center gap-7'>
        <Link to='/'>
        <span className='font-bold text-xl text-sky-600'>Connectify</span>
        </Link>
        <HomeOutlinedIcon/>
        <Brightness3OutlinedIcon/>
        <WidgetsOutlinedIcon/>
        {/* Container div for search icon and search box */}
        <div className='flex items-center gap-2 border rounded-md p-2'>
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search' className='outline-none w-96' />
        </div>
      </div>
      {/* Rightside of navbar */}
      <div className='flex items-center gap-7'>
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        {/* Container div for profile image and profile name */}
        <div className='flex items-center gap-3'>
          <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" className='w-8 h-8 rounded-full object-cover' />
          <span>Vijesh KR</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar