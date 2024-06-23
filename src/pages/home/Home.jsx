import React from 'react'
import Stories from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'
import Share from '../../components/share/Share'

const Home = () => {
  return (
    <div className='p-5 sm:p-10 dark:bg-neutral-800' >
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home