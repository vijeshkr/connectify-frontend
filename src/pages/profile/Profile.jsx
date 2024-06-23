import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className='dark:bg-neutral-800'>
      {/* Images container */}
      <div className='w-full sm:h-72 h-60 relative'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img className='sm:w-44 sm:h-44 w-32 h-32 rounded-full object-cover absolute left-0 right-0 mx-auto sm:top-48 top-44' src="https://images.pexels.com/photos/872756/pexels-photo-872756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      {/* Profile container */}
      <div className='sm:px-10 px-3 py-3 sm:py-5'>
        <div className='h-48 bg-white shadow-custom rounded-md flex items-center justify-between p-5 mb-5 dark:bg-black dark:text-white'>
           <div className='flex-1 flex-wrap flex gap-3 text-gray-600 text-xl lg:text-2xl'>
              <a href="https://www.facebook.com/">
                <FacebookOutlinedIcon/>
              </a>
              <a href="https://www.instagram.com/">
                <InstagramIcon />
              </a>
              <a href="https://in.linkedin.com/">
                <LinkedInIcon />
              </a>
              <a href="https://in.pinterest.com/">
                <PinterestIcon />
              </a>
           </div>
           <div className='flex-1 flex flex-col gap-3 items-center'>
            <span className='font-medium lg:text-2xl text-xl pt-8 text-center'>Visenya Targaryen</span>
            {/* Container div */}
            <div className='flex w-full items-center justify-around text-gray-600'>
              <div className='hidden lg:flex'>
                <PlaceIcon fontSize='small'/>
                <span className='text-xs'> USA</span>
              </div>
              <div className='hidden lg:flex'>
                <LanguageIcon fontSize='small'/>
                <span className='text-xs'> Visenya.targaryen</span>
              </div>
              
            </div>
            <button className='bg-blue-600 text-white rounded-md py-1 w-16 sm:text-base text-xs sm:w-24'>follow</button>
           </div>
           <div className='flex-1 flex items-center justify-end gap-3 text-gray-600'>
            <EmailIcon className='cursor-pointer'/>
            <MoreVertIcon className='cursor-pointer'/>
           </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile