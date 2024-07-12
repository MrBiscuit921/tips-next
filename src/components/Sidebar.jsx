"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { HiHome, HiDotsHorizontal } from 'react-icons/hi';

export default function Sidebar() {
    const { data: session} = useSession();
  return (

    <div className=' flex flex-col p-3 justify-between h-screen'>
        <div className='flex flex-col gap-4 p-3'>
      <Link href='/'>
        <img src='https://github.com/MrBiscuit921/tips-next/blob/main/src/images/logo.png?raw=true' alt='Logo'className='rounded-xl w-16 h-16 cursor-pointer p-3 hover:bg-gray-200  transition-all duration-200 ' />
      </Link>
      <Link
        href='/'
        className='flex items-center p-3 hover:bg-gray-200 rounded-full transition-all duration-200 gap-2 w-fit'>
        <HiHome className='w-7 h-7' />
        <span className='font-bold hidden xl:inline'>Home</span>
      </Link>
      {/* checks if they're signed in or not and displays correct button */}
      {session && (
        <button className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline'
        onClick={() => signOut()}>
          Sign Out
        </button>
      )}
      </div>
        {session ? (
            <div className='text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'>
                <img src={session.user.image} alt="user-img" className='h-10 w-10 rounded-full xl:mr-2'/>
                <div className='hidden xl:inline'>
                    <h4 className='font-bold'>{session.user.name}</h4>
                    <p className='text-gray-500'>@{session.user.username}</p>
                </div>
                <HiDotsHorizontal className='h-5 xl:ml-8 hidden xl:inline' />
            </div>

        ) : (
          <button className='text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 w-16 shadow-md xl:inline'
            onClick={() => signIn()}>
            <img src='https://cdn3.iconfinder.com/data/icons/dashboard-ui-element/32/Dashboard_icon_design_expanded-28-512.png' alt="user-img" className='h-10 w-10 rounded-full xl:mr-2'/>
          </button>
        )}
    </div>
  );
}
