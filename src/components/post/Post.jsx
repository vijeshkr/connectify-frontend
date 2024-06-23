import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../comments/Comments';

const Post = ({ post }) => {


    const [commentOpen, setCommentOpen] = useState(false);

    // Temporary like unlike hook
    const [liked, setLiked] = useState(false);

    const toggleLiked = () => {
        setLiked(!liked);
    };

    return (
        <div className='shadow-custom bg-white rounded-lg dark:bg-black dark:text-white'>
            {/* Container div */}
            <div className='p-5'>
                {/* User div */}
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-3'>
                        <img className='w-10 h-10 object-cover rounded-full' src={post.profilePic} alt="" />
                        <div className='flex flex-col'>
                            <Link to={`/profile/${post.userId}`}>
                                <span className='font-medium text-sm'>{post.name}</span>
                            </Link>
                            <span className='text-xs'>1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                {/* Content div */}
                <div className="my-4">
                    <p className='text-sm'>{post.desc}</p>
                    <img className='w-full max-h-custom-500 object-cover mt-4' src={post.img} alt="" />
                </div>
                {/* Likes div */}
                <div className="flex items-center gap-5 text-sm">
                    <div className='flex gap-2 cursor-pointer'>
                        {liked ? <FavoriteOutlinedIcon className='text-red-600' onClick={ toggleLiked } /> : <FavoriteBorderOutlinedIcon onClick={ toggleLiked } />}
                        <p className='hidden sm:block'>12 Likes</p>
                    </div>
                    <div className=" flex gap-2 cursor-pointer" onClick={() => setCommentOpen(!commentOpen)}>
                        {<CommentOutlinedIcon />}
                        <p className='hidden sm:block'>14 Comments</p>
                    </div>
                    <div className="flex gap-2 cursor-pointer">
                        {<ShareOutlinedIcon />}
                        <p className='hidden sm:block'>Share</p>
                    </div>
                </div>
                    { commentOpen && <Comments/>}
            </div>
        </div>
    )
}

export default Post