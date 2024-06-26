import React, { useContext } from 'react'
import Friends from '@mui/icons-material/PeopleAltOutlined';
import Groups from '@mui/icons-material/GroupsOutlined';
import Market from '@mui/icons-material/StorefrontOutlined';
import Watch from '@mui/icons-material/OndemandVideo';
import Memories from '@mui/icons-material/TimerOutlined';
import Events from '@mui/icons-material/CalendarMonthOutlined';
import Gaming from '@mui/icons-material/SportsEsportsOutlined';
import Gallery from '@mui/icons-material/CollectionsOutlined';
import Videos from '@mui/icons-material/VideoLibraryOutlined';
import Messages from '@mui/icons-material/MailOutlineOutlined';
import Fund from '@mui/icons-material/SavingsOutlined';
import Tutorials from '@mui/icons-material/LibraryBooksOutlined';
import Courses from '@mui/icons-material/MenuBookOutlined';
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);
  return (
    <div className='hidden md:flex flex-2 sticky top-14 h-h-calc overflow-scroll no-scrollbar bg-white dark:bg-black dark:text-white '>
      {/* Container for the leftbar */}
      <div className='p-5'>
        {/* Section one */}
        <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-3'>
          <img src={'http://localhost:8800/images/'+currentUser.profilePic} alt="" className='w-8 h-8 rounded-full object-cover' />
          <span>{currentUser.name}</span>
        </div>
        <div className='flex items-center gap-3'>
          <Friends style={{ fontSize: '30px' }} />
          <span className='text-sm'>Friends</span>
        </div>
        <div className='flex items-center gap-3'>
          <Groups style={{ fontSize: '30px' }} />
          <span className='text-sm'>Groups</span>
        </div>
        <div className='flex items-center gap-3'>
          <Market style={{ fontSize: '30px' }} />
          <span className='text-sm'>Marketplace</span>
        </div>
        <div className='flex items-center gap-3'>
          <Watch style={{ fontSize: '30px' }} />
          <span className='text-sm'>Watch</span>
        </div>
        <div className='flex items-center gap-3'>
          <Memories style={{ fontSize: '30px' }} />
          <span className='text-sm'>Memories</span>
        </div>
        </div>
        <hr className='my-5'/>
        {/* Section two */}
        <div className='flex flex-col gap-5'>
          <span>Your shortcuts</span>
          <div className='flex items-center gap-3'>
          <Events style={{ fontSize: '30px' }} />
          <span className='text-sm'>Events</span>
        </div>
        <div className='flex items-center gap-3'>
          <Gaming style={{ fontSize: '30px' }} />
          <span className='text-sm'>Gaming</span>
        </div>
        <div className='flex items-center gap-3'>
          <Gallery style={{ fontSize: '30px' }} />
          <span className='text-sm'>Gallery</span>
        </div>
        <div className='flex items-center gap-3'>
          <Videos style={{ fontSize: '30px' }} />
          <span className='text-sm'>Videos</span>
        </div>
        <div className='flex items-center gap-3'>
          <Messages style={{ fontSize: '30px' }} />
          <span className='text-sm'>Messages</span>
        </div>
        </div>
        <hr className='my-5'/>
        {/* Section three */}
        <div className='flex flex-col gap-5'>
          <span>Others</span>
          <div className='flex items-center gap-3'>
          <Fund style={{ fontSize: '30px' }} />
          <span className='text-sm'>Fundraiser</span>
        </div>
        <div className='flex items-center gap-3'>
          <Tutorials style={{ fontSize: '30px' }} />
          <span className='text-sm'>Tutorials</span>
        </div>
        <div className='flex items-center gap-3'>
          <Courses style={{ fontSize: '30px' }} />
          <span className='text-sm'>Courses</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar