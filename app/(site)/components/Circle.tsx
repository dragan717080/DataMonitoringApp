import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import circleItems from '@/config/circleItems';
import CircleItem from './CircleItem';
import '../../styles/circle.css';

const Circle: FC = () => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        // console.log('Width is under 1280px');
      }
    };
  
    useEffect(() => {
      // Initial check when the page loads
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div>
      {/* on large screens display circle */}
      <div className="mt-24 mb-12 hidden lg:block">
        <div className="annulus mt-12 mx-auto relative">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}>
              <CircleItem
                imgAlt={circleItems[i].imgAlt}
                imgSrc={circleItems[i].imgSrc}
                title={circleItems[i].title}
                content={circleItems[i].content}
                index={i}
                key={i}
              />
              {i !== 4 && <div className={`marker marker-${i + 1}`} />}
            </div>
          ))}
        </div>
        <div className='md:absolute left-[39%] translate-y-[-240px]'>
          <Image
            height='141'
            width='250'
            src='/assets/images/logo-1.png'
            objectFit='contain'
            objectPosition='left'
            alt={`logo`}
            className='relative z-10 ml-[26%]'
          />
          <div className="relative translate-y-[-260px] h-[369px] w-0.5 ">
            <div className="absolute bg-[#FBB461] h-[449px] w-0.5 translate-x-[5%] translate-y-[-60px] rotate-90" />
            <div className="absolute bg-[#FBB461] h-[316px] w-0.5 translate-x-[60px] translate-y-[-93px] rotate-[125deg]" />
            <div className="absolute bg-[#FBB461] h-[232px] w-0.5 translate-x-[209px] translate-y-[-70px]" />
            <div className="absolute bg-[#FBB461] h-[316px] w-0.5 translate-x-[390px] translate-y-[-93px] rotate-[60deg]" />
            <div className="absolute bg-[#FBB461] h-[449px] w-0.5 translate-x-[449px] translate-y-[-60px] rotate-90" />
          </div>
        </div>
      </div>
      <div className='lg:hidden md:mt-20 lg:mt-12'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="row-v mb-6 md:py-1 min-h-[6rem]">
            <CircleItem
              imgAlt={circleItems[i].imgAlt}
              imgSrc={circleItems[i].imgSrc}
              title={circleItems[i].title}
              content={circleItems[i].content}
              index={i}
              key={i}
            />
            <div className='ml-32 my-auto '>
              { circleItems[i].minifiedContent }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Circle;
