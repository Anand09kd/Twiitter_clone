import React from 'react'
import Avatar from 'react-avatar';
import { CiSearch } from "react-icons/ci";

const RightSidebar = () => {
  return (
    <div className='w-[25%]'>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full' >
        <CiSearch size='20px' />
        <input type='text' className='bg-transparent outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-blod text-lg my-3 '>Who to follow</h1>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
              <Avatar src="https://pbs.twimg.com/profile_images/1819726682690859008/5p_ElaV4_400x400.jpg" size='40' round={true} />
            </div>
            <div className='ml-2'>
              <h1 className='font-blod'>Anand</h1>
              <p className='text-sm'>means_Khush</p>
            </div>
         </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
              <Avatar src="https://pbs.twimg.com/profile_images/1819726682690859008/5p_ElaV4_400x400.jpg" size='40' round={true} />
            </div>
            <div className='ml-2'>
              <h1 className='font-blod'>Anand</h1>
              <p className='text-sm'>means_Khush</p>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
              <Avatar src="https://pbs.twimg.com/profile_images/1819726682690859008/5p_ElaV4_400x400.jpg" size='40' round={true} />
            </div>
            <div className='ml-2'>
              <h1 className='font-blod'>Anand</h1>
              <p className='text-sm'>means_Khush</p>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar