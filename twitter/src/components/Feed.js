import React from 'react'
import CreatePost from './CreatePost'

function Feed() {
  return (
    <div className='w-[50%] border border gray-200'>
      <div>
        <CreatePost/>
      </div>
    </div>
  )
}

export default Feed