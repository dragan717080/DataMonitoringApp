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

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='top-3 py-6 md:py-0 px-[3%] md:px-[72px] lg:px-20 xl:px-24 2xl:px-32 row md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-12 w-[100vw] h-fit md:pt-10 md:pb-7 relative bg-gradient-to-r from-[#f13ea2] to-[#3926b3]'>
      <div className='md:w-[50%] 2xl:w-[40%]'>
        <p className='text-5xl xl:text-6xl bold pb-3 gradient-title'>
          Empower your insights
        </p>
        <div className='relative mt-1 mb-12'>
          <h1
            className={
              `text-4xl text-[#ccc] bold absolute top-0 left-0 w-full transition-transform duration-400 
              ${animateOut ? '-translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
              }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.5, 1)' }}
          >
            {headerTexts[headerIndex]}
          </h1>
        </div>
        <p className='leading-tight text-3xl bold my-2'>
          data&apos;s potential with AlertBird: cost-efficient, all-in-one observability platform for peak performance.
        </p>
        <p className='leading-tight text-xl my-2'>
          Proactively predict and resolve errors in real-time. <br />
          Over 10 supported languages and frameworks. <br />
          Start improving your code today.
        </p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          Free Trial
        </button>
        <div className='leading-tight text-xl my-2'>
          Less than 1 minute setup. No credit card needed.
        </div>
      </div>
      <div className="relative h-[22rem] w-[50%] xl:w-[25%] 2xl:w-[30%] hidden md:block">
        <Image layout='fill' src='/assets/images/bar-chart-alt.png' alt='Banner Image' />
        <div className='absolute top-1/2 w-full text-center px-10 semibold'>
          <p className='text-sm sm:text-lg text-white'>Feel the impact on your analysis and resolution in a matter of minutes.</p>
          <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full bold my-3 hover:shadow-xl active:scale-90 transition duration-150 mt-5'>
            Check Our Products
          </button>
        </div>
      </div>
      <div className="relative h-[22rem] w-[20%] xl:w-[25%] 2xl:w-[30%] hidden xl:block">
        <Image layout='fill' src='/assets/images/chart-1.png' objectFit='cover' alt='Banner Image' />
        <div className='absolute top-1/2 w-full text-center px-10 semibold'>
          <p className='text-sm sm:text-lg text-white'>Eliminate downtime. Fix issues faster. Build resilient systems.</p>
          <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full bold my-3 hover:shadow-xl active:scale-90 transition duration-150 mt-5'>
            Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
