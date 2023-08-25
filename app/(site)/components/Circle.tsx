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
          height='240'
          width='400'
          src='/assets/images/logo.png'
          objectFit='contain'
          objectPosition='left'
          alt={`logo`}
        />
        <div className="relative translate-y-[-260px] h-[369px] w-0.5 ">
          <div className="absolute bg-[#FBB461] h-[369px] w-0.5 translate-x-[-45px] rotate-90" />
          <div className="absolute bg-[#FBB461] h-[246px] w-0.5 translate-x-[17px] translate-y-[-45px] rotate-[125deg]" />
          <div className="absolute bg-[#FBB461] h-[177px] w-0.5 translate-x-[209px] translate-y-[-40px]" />
          <div className="absolute bg-[#FBB461] h-[261px] w-0.5 translate-x-[394px] translate-y-[-45px] rotate-[58deg]" />
          <div className="absolute bg-[#FBB461] h-[369px] w-0.5 translate-x-[489px] rotate-90" />
        </div>
      </div>
    </div >
  )
}

export default Circle;
