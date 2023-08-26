import { FC } from 'react';
import Image from 'next/image';
import circleItems from '@/config/circleItems';
import CircleItem from './CircleItem';

const Circle: FC = () => {

  return (
    <div className="my-24">
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
      <div className='absolute left-[39%] translate-y-[-240px]'>
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
          <div className="absolute bg-[#FBB461] h-[449px] w-0.5 translate-x-[45px] translate-y-[-60px] rotate-90" />
          <div className="absolute bg-[#FBB461] h-[316px] w-0.5 translate-x-[60px] translate-y-[-93px] rotate-[125deg]" />
          <div className="absolute bg-[#FBB461] h-[232px] w-0.5 translate-x-[209px] translate-y-[-70px]" />
          <div className="absolute bg-[#FBB461] h-[316px] w-0.5 translate-x-[390px] translate-y-[-93px] rotate-[60deg]" />
          <div className="absolute bg-[#FBB461] h-[449px] w-0.5 translate-x-[449px] translate-y-[-60px] rotate-90" />
        </div>
      </div>
    </div >
  )
}

export default Circle;
