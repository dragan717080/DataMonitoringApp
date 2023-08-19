import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

const headerTexts = ['Unleash', 'Maximize', 'Harness'];

const Banner: FC = () => {
  const [headerIndex, setHeaderIndex] = useState<number>(0);
  const [animateOut, setAnimateOut] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true);

      setTimeout(() => {
        setHeaderIndex((prevIndex) => (prevIndex + 1) % headerTexts.length);
        setAnimateOut(false);
      }, 400); // Faster timing for the opacity transition

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex space-x-12'>
      <div className=''>
        <p className='text-5xl'>
          Empower your insights
        </p>
        <div className='relative mt-1 mb-12'>
          <h1
            className={
              `text-3xl text-red-400 font-bold absolute top-0 left-0 w-full transition-transform duration-400 
              ${animateOut ? '-translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.5, 1)' }}
          >
            {headerTexts[headerIndex]}
          </h1>
        </div>
        <p className='leading-tight text-2xl w-[70%]'>
          data's potential with AlertBird: cost-efficient, all-in-one observability platform for peak performance.
          Proactively discover, predict, and resolve errors in real-time.
        </p>
      </div>
      <div className='h-[38rem] w-[40rem] relative'>
        <Image layout='fill' src='/assets/images/banner-img.png' objectFit='cover' alt='Banner Image' />
      </div>
    </div>
  );
};

export default Banner;
