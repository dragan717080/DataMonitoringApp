'use client';
import { FC, useEffect } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Navbar } from '.';
import ArrowIcon from './svgs/ArrowIcon';
import Link from 'next/link';

const Header: FC = () => {

  const session = useSession();
  const router = useRouter();

  return (
    <header className='sticky top-0 z-20 row-v bg-gray-600 shadow-md py-5 px-7 md:px-10 2xl:px-20'>
      <div
        onClick={() => router.push('/')}
        className="relative flex items-center h-16 w-[20rem] pointer -my-3"
      >
        <Image
        height='120'
        width='170'
          src='/assets/images/logo-full-t.png'
          objectFit='contain'
          objectPosition='left'
          alt={`logo`}
        />
      </div>
      <Navbar />
      <div className='row-v min-w-[20rem] pt-2.5 pb-2 md: py-2 md:border-2 rounded-full md:shadow-sm'>
        <input
          type="text"
          placeholder='Start your search'
          className='ml-1 pl-4 border-none outline-none bg-transparent flex-grow text-sm text-white placeholder-gray-300'
        />
        <MagnifyingGlassIcon className='h-8 mr-2 p-2 bg-red-400 text-white rounded-full pointer hidden md:inline-flex md:mx-2' />
      </div>
      <div className='flex just row-end items-center space-x-4 text-white ml-auto semibold'>
        {session.status === 'authenticated'
          ? <div className='inline-flex'>
            <div className='t-red'>{session.data!.user!.name}</div>
            <button className='t-cornflowerblue ml-3' onClick={async () => await signOut()} >Logout</button>
          </div>
          : <div className='pr-16 hover:text-red-400'><a href='auth'>Login</a></div>
        }
      </div>
    </header>
  );
};

export default Header;
