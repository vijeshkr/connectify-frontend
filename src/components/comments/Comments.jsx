import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom'

const Comments = () => {

    const { currentUser } = useContext(AuthContext)

    // Temporary
    const comments = [
        {
            id:1,
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            name:'Rhaenyra Targaryen',
            uderId:1,
            profilePicture:'https://images.immediate.co.uk/production/volatile/sites/3/2022/10/0852HOTDS01-ab006fe.jpg?quality=90&webp=true&resize=750,500',
        },
        {
            id:2,
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            name:'Corlys Velaryon',
            userId:2,
            profilePicture:'https://images.immediate.co.uk/production/volatile/sites/3/2022/10/lord-corlys-velaryon-5f28bcf.jpg?quality=90&webp=true&resize=638,426',
        },
    ]
  return (
    <div>
        {/* Write a comment section */}
        <div className='flex items-center justify-between gap-5 mt-3'>
            <img className='w-10 h-10 rounded-full object-cover' src={currentUser.profilePic} alt="" />
            <input className='w-full p-2 border rounded-md outline-blue-600 bg-transparent' type="text" placeholder='write a comment' />
                <button className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm' >Send</button>
        </div>
        {/* Display each comment */}
        {comments.map((comment) => (
            <div className='my-7 flex justify-between gap-5'>
                {/* Commentator profile picture */}
                <img src={comment.profilePicture} alt="" className='w-10 h-10 rounded-full object-cover' />
                {/* Comment and user name */}
                <div className='flex flex-col gap-1 flex-6'>
                    <Link to={`/profile/${comment.userId}`}>
                    <span className='font-medium'>{comment.name}</span>
                    </Link>
                    
                    <p className='text-xs flex-1'>{comment.desc}</p>
                </div>
                <span className='self-center text-xs text-gray-400'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments