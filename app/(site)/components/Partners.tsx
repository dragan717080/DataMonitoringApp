import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import '../../styles/partners.css';

const Partners: FC = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  let intervalId;

  const handleControlClick = (index: number) => {
    clearInterval(intervalId);
    setCurrentIndex(index);
  };

  useEffect(() => {
    intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="controls row">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          data-index={index + 1}
          className={`${index === currentIndex ? 'active' : ''}`} key={index}
          onClick={() => handleControlClick(index)}
        >
          <Image
            src={`/assets/images/partners/person-img-${index + 1}.png`}
            alt={`Slide ${index + 1}`}
            width={100}
            height={100}
            className='rounded-full'
          />
        </div>
      ))}
    </div>
  )
}

export default Partners;
