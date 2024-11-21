import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
    return (
        <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-3'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1819726682690859008/5p_ElaV4_400x400.jpg" size='40' round={true} />
                    <div className=' ml-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold'>Anand</h1>
                            <p className='text-gray-500 text-sm ml-1'>@Anandkd</p>
                        </div>
                        <div>
                            <p>Hello Developer lets connect and grow together.</p>
                        </div>
                        <div className='flex justify-between my-3'> 
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-green-100 rounded-full cursor-pointer'>
                                    <FaRegComment size='22px'/>
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-pink-100 rounded-full cursor-pointer'>
                                    <CiHeart size='24px'/>
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-yellow-100 rounded-full cursor-pointer'>
                                    <CiBookmark size='24px'/>
                                </div>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet