import { FC } from 'react';
import Image from 'next/image';
import circleItems from '@/config/circleItems';
import CircleItem from './CircleItem';

const Circle: FC = () => {
  return (
    <div className="my-16">
      <div class="annulus mt-12 mx-auto relative">
        {Array.from({ length: 5 }).fill().map((_, i) => (
          <div key={i}>
          <CircleItem
            top={circleItems[i].top}
            left={circleItems[i].left}
            imgAlt={circleItems[i].imgAlt}
            imgSrc={circleItems[i].imgSrc}
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
