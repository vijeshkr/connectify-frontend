import React from 'react'
import Stories from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'

const Home = () => {
  return (
    <div className='p-10' >
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home