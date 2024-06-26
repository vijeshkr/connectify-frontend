import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
import { useQuery, useMutation , useQueryClient } from 'react-query';
import { makeRequest } from '../../axios';
import moment from 'moment';

const Comments = ({ postId }) => {

    const [desc, setDesc] = useState('')
    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery(['comments'], () =>
    makeRequest.get(`/comments?postId=${postId}`).then((res) => {
        return res.data;
    }));

    const queryClient = useQueryClient();

    const mutation = useMutation((newComment) => {
        return makeRequest.post('/comments', newComment);
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries(['comments'])
      },
    })

    const handleClick = async (e) => {
      e.preventDefault();
      mutation.mutate({ desc, postId });
      setDesc('');

    };

  return (
    <div>
        {/* Write a comment section */}
        <div className='flex items-center justify-between gap-5 mt-3'>
            <img className='w-10 h-10 rounded-full object-cover' src={currentUser.profilePic} alt="" />
            <input onChange={e=>setDesc(e.target.value)} value={desc} className='w-full p-2 border rounded-md outline-blue-600 bg-transparent' type="text" placeholder='write a comment' />
                <button onClick={handleClick} className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm' >Send</button>
        </div>
        {/* Display each comment */}
        {error ? 'Something went wrong' : isLoading ? 'Loading' : data.map((comment) => (
            <div key={comment.id} className='my-7 flex justify-between gap-5'>
                {/* Commentator profile picture */}
                <img src={comment.profilePic} alt="" className='w-10 h-10 rounded-full object-cover' />
                {/* Comment and user name */}
                <div className='flex flex-col gap-1 flex-6'>
                    <Link to={`/profile/${comment.userId}`}>
                    <span className='font-medium'>{comment.name}</span>
                    </Link>
                    
                    <p className='text-xs flex-1'>{comment.desc}</p>
                </div>
                <span className='self-center text-xs text-gray-400'>{moment(comment.createdAt).fromNow()}</span>
            </div>
        ))
    }
    </div>
  )
}

export default Comments