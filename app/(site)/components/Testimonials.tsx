import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import testimonials from '@/config/testimonials';
import '../../styles/testimonials.css';

const Testimonials: FC = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  let intervalId: number;

  const handleControlClick = (index: number) => {
    clearInterval(intervalId);
    setCurrentIndex(index);
  };

  useEffect(() => {
    intervalId = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-6 md:mt-10 lg:mt-12 2xl:mt-24 py-7 absolute left-0 w-screen testimonials min-h-[998px] md:min-h-0">
      <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1>
            { testimonials[currentIndex].content }
          </h1>
          <h4>&mdash;{ testimonials[currentIndex].author }</h4>
        </div>
      </div>
      <div className="mt-12 controls row absolute 2xl:left-[32%]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            data-index={index + 1}
            className={`2xl:w-[10rem] ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleControlClick(index)}
            key={index}
          >
            <Image
              src={`/assets/images/testimonials/person-img-${index + 1}.png`}
              alt={`Slide ${index + 1}`}
              width={100}
              height={100}
              className='rounded-full'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials;
