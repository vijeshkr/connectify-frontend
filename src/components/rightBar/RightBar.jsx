import React from 'react'

const RightBar = () => {
  return (
    <div className='flex-3 sticky top-14 h-h-calc overflow-scroll no-scrollbar '>
      {/* Container for the cards of the rightbar */}
      <div className='p-5 '>
        {/* First card suggestions for you */}
        <div className='shadow-custom p-5 rounded-md mb-5 bg-white'>
          <span className='text-gray-500 text-sm'>Suggestions For You</span>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2'>
              <img className='w-10 h-10 rounded-full object-cover' src="https://blenderartists.org/uploads/default/original/4X/d/f/0/df06f3195773fc73f2ad4668d16bdfff4afff191.jpeg" alt="" />
              <span className='font-medium text-xs'>Daemon Targaryen</span>
            </div>
            <div className='flex items-center gap-3'>
              <button className='py-1 px-3 rounded-lg text-white text-xs bg-blue-600 cursor-pointer'>follow</button>
              <button className='py-1 px-2 rounded-lg text-white text-xs bg-red-600 cursor-pointer'>dismiss</button>
            </div>
          </div>
        </div>
        {/* Second card latest activities */}
        <div className='shadow-custom p-5 rounded-md mb-5 bg-white'>
        <span className='text-gray-500 text-sm'>Latest Activities</span>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2'>
              <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" />
              <p className='text-xs text-gray-400'>
              <span className='font-medium text-xs text-black'>John Snow </span>
              changed their cover picture
              </p>
            </div>
            <span className='text-xs text-gray-400'>1 min ago</span>
          </div>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2'>
            <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" />
              <p className='text-xs text-gray-400'>
              <span className='font-medium text-xs text-black'>John Snow </span>
              changed their cover picture
              </p>
            </div>
            <span className='text-xs text-gray-400'>1 min ago</span>
          </div>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2'>
            <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" />
              <p className='text-xs text-gray-400'>
              <span className='font-medium text-xs text-black'>John Snow </span>
              changed their cover picture
              </p>
            </div>
            <span className='text-xs text-gray-400'>1 min ago</span>
          </div>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2'>
            <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" />
              <p className='text-xs text-gray-400'>
              <span className='font-medium text-xs text-black'>John Snow </span>
              changed their cover picture
              </p>
            </div>
            <span className='text-xs text-gray-400'>1 min ago</span>
          </div>
        </div>
        {/* Third card online friends */}
        <div className='shadow-custom p-5 rounded-md mb-5 bg-white'>
        <span className='text-gray-500 text-sm'>Online Friends</span>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2 relative'>
              <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" />
              <div className='w-3 h-3 rounded-full bg-green-600 absolute top-0 left-7'/>
              <span className='font-medium text-xs text-black'>John Snow </span>
            </div>
          </div>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2 relative'>
              <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" />
              <div className='w-3 h-3 rounded-full bg-green-600 absolute top-0 left-7'/>
              <span className='font-medium text-xs text-black'>John Snow </span>
            </div>
          </div>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2 relative'>
              <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" />
              <div className='w-3 h-3 rounded-full bg-green-600 absolute top-0 left-7'/>
              <span className='font-medium text-xs text-black'>John Snow </span>
            </div>
          </div>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2 relative'>
              <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" />
              <div className='w-3 h-3 rounded-full bg-green-600 absolute top-0 left-7'/>
              <span className='font-medium text-xs text-black'>John Snow </span>
            </div>
          </div>
          <div className='flex items-center justify-between my-5'>
            {/* User info */}
            <div className='flex items-center gap-2 relative'>
              <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" />
              <div className='w-3 h-3 rounded-full bg-green-600 absolute top-0 left-7'/>
              <span className='font-medium text-xs text-black'>John Snow </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar