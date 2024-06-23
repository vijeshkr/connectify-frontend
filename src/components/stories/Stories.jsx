import React from 'react'

const Stories = () => {

    // Temporary dummy data for stories
    const stories = [
        {
            id: 1,
            name: 'John Snow',
            img: 'https://images.pexels.com/photos/5990021/pexels-photo-5990021.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 2,
            name: 'John Snow',
            img: 'https://images.pexels.com/photos/5990021/pexels-photo-5990021.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 3,
            name: 'John Snow',
            img: 'https://images.pexels.com/photos/5990021/pexels-photo-5990021.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 4,
            name: 'John Snow',
            img: 'https://images.pexels.com/photos/5990021/pexels-photo-5990021.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        
    ]

  return (
    <div className='flex gap-3 mb-8'>
        {/* User story section */}
        <div className='flex-1 overflow-hidden object-cover relative '>
                <img className='sm:w-32 h-full rounded-md sm:rounded-xl' src='https://images.pexels.com/photos/3830432/pexels-photo-3830432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                <span className='absolute bottom-3 left-2 text-white sm:text-sm text-xs'>John Snow</span>
                <button className='h-8 w-8 pb-2 flex justify-center items-center rounded-full absolute bottom-9 left-2 bg-blue-600 text-white font-bold cursor-pointer'><span className='text-3xl'>+</span></button>
            </div>
            {/* Display each story */}
        {stories.map((story)=>(
            <div className='flex-1 overflow-hidden object-cover relative' key={story.id}>
                <img className='sm:w-32 sm:h-full rounded-md sm:rounded-xl' src={story.img} alt="" />
                <span className='absolute bottom-3 left-2 text-white sm:text-sm text-xs'>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories