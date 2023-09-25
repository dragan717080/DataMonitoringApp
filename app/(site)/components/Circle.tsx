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
      <div className="mt-7 pt-4 mb-12 hidden lg:block">
        <div className="annulus mt-12 mx-auto relative">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}>
              <CircleItem
                imgAlt={circleItems[i].imgAlt}
                imgSrc={circleItems[i].imgSrc}
                title={circleItems[i].title}
                content={circleItems[i].content}
                minifiedContent={circleItems[i].minifiedContent}
                index={i}
                key={i}
              />
              {i !== 4 && <div className={`marker marker-${i + 1}`} />}
            </div>
          ))}
        </div>
        <div className='md:absolute left-[39%] translate-y-[-240px] h-[14rem] logo-img'>
          <Image
            height='141'
            width='250'
            src='/assets/images/logo-1.png'
            objectFit='contain'
            objectPosition='left'
            alt={`logo`}
            className='relative z-10 h-full'
          />
          <div className="relative translate-y-[-260px] h-[23rem] w-0.5 ">
            <div className="absolute bg-[#FBB461] h-[28rem] w-0.5 translate-x-[5%] translate-y-[-60px] rotate-90" />
            <div className="absolute bg-[#FBB461] h-[20rem] w-0.5 translate-x-[1rem] translate-y-[-6rem] rotate-[125deg]" />
            <div className="absolute bg-[#FBB461] h-[16rem] w-0.5 line-3" />
            <div className="absolute bg-[#FBB461] h-[20rem] w-0.5 translate-x-[19rem] translate-y-[-6rem] rotate-[54deg]" />
            <div className="absolute bg-[#FBB461] h-[26rem] w-0.5 translate-x-[24rem] translate-y-[-45px] rotate-90" />
          </div>
        </div>
      </div>
      <div className='lg:hidden mb-10 md:mb-0 md:mt-20 lg:mt-12'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="row-v mb-6 md:py-1 min-h-[6rem]">
            <CircleItem
              imgAlt={circleItems[i].imgAlt}
              imgSrc={circleItems[i].imgSrc}
              title={circleItems[i].title}
              content={circleItems[i].content}
              minifiedContent={circleItems[i].minifiedContent}
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
