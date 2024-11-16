import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CiUser } from 'react-icons/ci'
import { CiBookmark } from 'react-icons/ci'
import { CiLogout } from "react-icons/ci";

function LeftSidebar() {
  return (
    <div className='[w-20%]'>
        <div>
            <img className='ml-4' width={'28px'} src='https://images.freeimages.com/image/large-previews/9fe/x-twitter-light-grey-logo-5694251.png' alt='twitter logo'/>
        </div>
        <div className='my-4'>
            <div className='flex item-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
                <div>
                    <CiHome size='24px'/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Home</h1>
            </div>
            <div className='flex item-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
                <div>
                    <CiHashtag size='24px'/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Explore</h1>
            </div>
            <div className='flex item-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
                <div>
                    <IoIosNotifications size='24px' />
                </div>
                <h1 className='font-bold text-lg ml-2'>Notifications</h1>
            </div>
            <div className='flex item-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
                <div>
                    <CiUser size='24px' />
                </div>
                <h1 className='font-bold text-lg ml-2'>Profile</h1>
            </div>
            <div className='flex item-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
                <div>
                    <CiBookmark size='24px' />
                </div>
                <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
            </div>
            <div className='flex item-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
                <div>
                    <CiLogout size='24px' />
                </div>
                <h1 className='font-bold text-lg ml-2'>Logout</h1>
            </div>
            <button className='px-4 py-2 border-none text-md bg-[#1D98F0] w-full rounded-full text-white font-bold'>Post</button>
        </div>
    </div>
  )
}

export default LeftSidebar
