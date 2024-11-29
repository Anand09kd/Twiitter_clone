import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
      <div>
        <div className='flex items-center py-2'>
          <Link to='/' className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
            <IoIosArrowBack size='25px' />
          </Link>
          <div className='ml-2'>
            <h1 className='font-bold text-lg'>Anand</h1>
            <p className='text-gray-500 text-sm'>10 Post</p>
          </div>
        </div>
        <img src='https://as1.ftcdn.net/v2/jpg/03/52/39/00/1000_F_352390061_Bem8aYkzfGhIObTC4fXhf0PmKQjWM1wN.jpg' alt='banner' />
        <div className='absolute top-48 ml-2 border-4 border-white rounded-full'>
            <Avatar src="https://pbs.twimg.com/profile_images/1819726682690859008/5p_ElaV4_400x400.jpg" size='110' round={true} />
        </div>
        <div className='text-right m-4'>
        <button className='px-4 py-1 rounded-full text-right border border-gray-400 hover:bg-gray-200'>Edit Profile</button>
        </div>
        <div className='m-4'>
          <h1 className='font-bold text-xl'>Anand</h1>
          <p>@AKD_developer</p>
        </div>
        <div className='m-4 text-sm'>
          <p>Dedicated and detail-oriented software developer with a strong foundation in MERN stack development.</p>
        </div>
      </div>
    </div>
  )
}

export default Profile