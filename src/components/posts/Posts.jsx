import React from 'react';
import Post from '../post/Post';
import { useQuery } from 'react-query';
import { makeRequest } from '../../axios';


const Posts = ({userId}) => {

  const { isLoading, error, data } = useQuery('posts', () =>
    makeRequest.get(`/posts?userId?=${userId}`).then((res) => res.data)

  );

  return (
    <div className='flex flex-col sm:gap-5 gap-3'>
      {error ? 'Something went wrong' : isLoading ? 'Loading' : data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
};

export default Posts