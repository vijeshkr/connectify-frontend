import React, { useContext, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../comments/Comments';
import moment from "moment";
import { useQuery, useMutation , useQueryClient } from 'react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';

const Post = ({ post }) => {


    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setmenuOpen] = useState(false);
    const { currentUser } =useContext(AuthContext);

    const { isLoading, error, data } = useQuery(['likes',post.id], () => 
    makeRequest.get(`/likes?postId=${post.id}`).then((res) => {
        return res.data;
    }));

    const queryClient = useQueryClient();

    const mutation = useMutation((liked) => {
        if(liked) return makeRequest.delete(`/likes?postId=${post.id}`);
        return makeRequest.post('/likes', {postId:post.id});
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries(['likes'])
      },
    });

    const deleteMutation = useMutation((postId) => {
         return makeRequest.delete('/posts/'+postId);
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts'])
      },
    });

    const handleLike = () => {
        mutation.mutate(data?.includes(currentUser.id))
    };

    const handleDelete = () => {
        deleteMutation.mutate(post.id)
    }

    return (
        <div className='shadow-custom bg-white rounded-lg dark:bg-black dark:text-white'>
            {/* Container div */}
            <div className='p-5'>
                {/* User div */}
                <div className="flex items-center justify-between relative">
                    <div className='flex items-center gap-3'>
                        <img className='w-10 h-10 object-cover rounded-full' src={'http://localhost:8800/images/'+post.profilePic} alt="" />
                        <div className='flex flex-col'>
                            <Link to={`/profile/${post.userId}`}>
                                <span className='font-medium text-sm'>{post.name}</span>
                            </Link>
                            <span className='text-xs'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon onClick={()=>setmenuOpen(!menuOpen)} />
                        {menuOpen && post.userId === currentUser.id && (<button className='absolute top-7 right-0 py-1 px-2 text-xs bg-blue-600 rounded-sm text-white' onClick={handleDelete} >delete</button>)}
                </div>
                {/* Content div */}
                <div className="my-4">
                    <p className='text-sm'>{post.desc}</p>
                    <img className='w-full max-h-custom-500 object-cover mt-4' src={'http://localhost:8800/images/'+post.img} alt="" />
                </div>
                {/* Likes div */}
                <div className="flex items-center gap-5 text-sm">
                    <div className='flex gap-2 cursor-pointer'>
                        {isLoading ?
                        'Loading...' :
                         data?.includes(currentUser.id) ? 
                        <FavoriteOutlinedIcon onClick={handleLike} className='text-red-600' /> : 
                        <FavoriteBorderOutlinedIcon onClick={handleLike}/>}
                        <p className='hidden sm:block'>{data?.length} Likes</p>
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
                    { commentOpen && <Comments postId={post.id}/>}
            </div>
        </div>
    )
}

export default Post