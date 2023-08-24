import { FC } from 'react';
import Image from 'next/image';

const Circle: FC = () => {
  return (
    <div className="my-16">
      <div class="annulus mt-12 mx-auto relative">
        
        <div className="container h-24 w-24 absolute top-[13rem] left-[-51px] rounded-full bg-white shadow-xl">
          <Image
            height='64'
            width='64'
            objectFit='contain'
            alt='Unit Testing'
            src='/assets/images/unit-testing.png'
            className='absolute top-4 left-4'
          />
        </div>
        <div className="marker marker-1"></div>
        <div className="h-24 w-24 absolute top-[0rem] left-[98px] rounded-full bg-white shadow-xl">
          <Image
            height='64'
            width='64'
            objectFit='contain'
            alt='Unit Testing'
            src='/assets/images/unit-testing.png'
            className='absolute top-4 left-4'
          />
        </div>
        <div className="marker marker-2"></div>
        <div className="h-24 w-24 absolute top-[-70px] left-[23rem] rounded-full bg-white shadow-xl">
          <Image
            height='64'
            width='64'
            objectFit='contain'
            alt='Unit Testing'
            src='/assets/images/unit-testing.png'
            className='absolute top-4 left-4'
          />
        </div>
        {/* { Array.from({length: 4}).map((_, index: number) => (
          <div className="marker" key={index}></div>
        )) } */ }
        <div className="marker marker-3"></div>
        <div className="h-24 w-24 absolute top-[0rem] left-[653px] rounded-full bg-white shadow-xl">
          <Image
            height='64'
            width='64'
            objectFit='contain'
            alt='Unit Testing'
            src='/assets/images/unit-testing.png'
            className='absolute top-4 left-4'
          />
        </div>
        <div className="marker marker-4"></div>
        <div className="h-24 w-24 absolute top-[13rem] left-[802px] rounded-full bg-white shadow-xl">
          <Image
            height='64'
            width='64'
            objectFit='contain'
            alt='Unit Testing'
            src='/assets/images/unit-testing.png'
            className='absolute top-4 left-4'
          />
        </div>
      </div>
    </div>
  )
}

export default Circle;
