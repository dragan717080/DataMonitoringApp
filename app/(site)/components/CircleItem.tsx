import { FC, useState } from 'react';
import Image from 'next/image';
import { CircleItemComponentProps } from '@/app/interfaces/props/CircleItemProps';

const CircleItem: FC<CircleItemComponentProps> = ({ imgAlt, imgSrc, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative circle-item circle-item-${index + 1}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex absolute ">
        <div className='w-32 relative max-h-0'>
          <div className="aurora-container">
            {Array.from({ length: 6 }).map((_, index) => (<div key={index} />))}
          </div>
          <div className="container bg-light h-24 w-24 top-[-19px] left-[7px] absolute rounded-full shadow-xl">
            <Image
              height='64'
              width='64'
              objectFit='contain'
              alt={imgAlt}
              src={`/assets/icons/${imgSrc}`}
              className='absolute top-4 left-4'
            />
          </div>
        </div>
        {(
          <div className="circle-item-toolbar rounded-lg z-20">
            { isHovered && (
              <div>
                { `${imgAlt} Toolbar` }
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CircleItem;
