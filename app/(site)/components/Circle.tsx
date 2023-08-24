import { FC } from 'react';
import Image from 'next/image';
import circleItems from '@/config/circleItems';
import CircleItem from './CircleItem';

const Circle: FC = () => {
  return (
    <div className="my-16">
      <div className="annulus mt-12 mx-auto relative">
        {Array.from({ length: 5 }).fill().map((_, i) => (
          <div key={i}>
          <CircleItem
            imgAlt={circleItems[i].imgAlt}
            imgSrc={circleItems[i].imgSrc}
            index={i}
            key={i}
          />
          {i !== 4 && <div className={`marker marker-${i + 1}`} />}
          </div>
        ))}
      </div>
    </div >
  )
}

export default Circle;
