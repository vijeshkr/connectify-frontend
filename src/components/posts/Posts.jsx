import React from 'react'
import Post from '../post/Post'

const Posts = () => {

// Temporary dummy data
const posts = [
  {
    id:1,
    name: 'Daemon Targaryen',
    userId:1,
    profilePic:'https://blenderartists.org/uploads/default/original/4X/d/f/0/df06f3195773fc73f2ad4668d16bdfff4afff191.jpeg',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img:'https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:2,
    name: 'Daemon Targaryen',
    userId:1,
    profilePic:'https://blenderartists.org/uploads/default/original/4X/d/f/0/df06f3195773fc73f2ad4668d16bdfff4afff191.jpeg',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id:3,
    name: 'Daemon Targaryen',
    userId:1,
    profilePic:'https://blenderartists.org/uploads/default/original/4X/d/f/0/df06f3195773fc73f2ad4668d16bdfff4afff191.jpeg',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img:'https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:4,
    name: 'Daemon Targaryen',
    userId:1,
    profilePic:'https://blenderartists.org/uploads/default/original/4X/d/f/0/df06f3195773fc73f2ad4668d16bdfff4afff191.jpeg',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img:'https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:5,
    name: 'Daemon Targaryen',
    userId:1,
    profilePic:'https://blenderartists.org/uploads/default/original/4X/d/f/0/df06f3195773fc73f2ad4668d16bdfff4afff191.jpeg',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img:'https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

  return (
    <div className='flex flex-col sm:gap-5 gap-3'>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts