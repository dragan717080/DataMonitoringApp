import { FC } from 'react';
import Image from 'next/image';
import Quote from './Quote';
import { useDispatch, useSelector } from 'react-redux';
import { setExpandedIndex } from '@/store/slices/expandableSlice';
import { RootState } from '@/store';

const Incidents = () => {

  return (
    <div className='md:absolute 2xl:top-10 2xl:max-w-[45rem]'>
      <div className='w-full'>
        <Image 
          height='140'
          width='440'
          alt='Logs Image'
          src='/assets/images/logs.png'
          className='w-full'
        />
      </div>
      <Quote />
    </div>
  )
}

export default Incidents;
