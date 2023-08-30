import React, { FC } from 'react';
import Image from 'next/image';
import '../../styles/cloud.css';

const Cloud: FC = () => {
  return (
    <div className='mt-10 relative w-full left-0 h-[53rem] 2xl:h-[40rem] overflow-hidden'>
      <div className="col-v absolute h-[80%] w-[90%] 2xl:w-[60%] row top-[10%] left-[5%] 2xl:left-[20%] z-10">
        <div className='bg-gray-600 h-full w-full rounded-xl'>
          {/* for large screens */}
          <div className="hidden md:grid grid-cols-2 md:gap-x-4 xl:gap-x-7 2xl:gap-x-10 h-full">
            <div className="cloud-card flex flex-col items:center px-12 my-10">
              <div className='cloud-card-title bold'>
                <i>Serverless actions</i>
              </div>
              <div className='relative mx-auto my-4 h-[15rem] w-[15rem]'>
                <Image
                  height='440'
                  width='320'
                  alt='Logo'
                  src='/assets/images/logo-alt-white.png'
                  className='w-full'
                />
              </div>
              <div className='cloud-text 2xl:ml-4'>
                Automate workflows, optimize data processing, and enhance user experiences. AlertBird empowers your company to effortlessly streamline operations.
              </div>
            </div>
            <div className='flex flex-col items:center '>
              <div className='relative mx-auto h-[12rem] w-[20rem] md:w-[18rem] lg:w-[20rem] mt-[3.25rem] mb-[7.375rem]'>
                <Image
                  height='440'
                  width='320'
                  alt='Logo'
                  src='/assets/images/aws-lambda.png'
                  objectFit='cover'
                  className='h-full w-full rounded-md 2xl:rounded-lg'
                />
                <div className='absolute h-[10rem] w-[15rem] md:top-[60%] md:left-[-12%] xl:left-[-20%] 2xl:left-[-25%]'>
                  <Image
                    height='440'
                    width='320'
                    alt='Logo'
                    src='/assets/images/aws-lambda-1.png'
                    objectFit='cover'
                    className='h-full w-full rounded-md 2xl:rounded-lg'
                  />
                </div>
              </div>
              <div className='cloud-text'>
                Similar to Azure Functions, AWS Lambda, or GitHub Actions, our platform enables you to run code without managing servers, simplifying your workflow and saving valuable time and resources.
              </div>
            </div>
          </div>
          {/* for small screens */}
          <div className="md:hidden flex flex-col items-center h-full w-full">
            <div className='cloud-card-title bold mt-6'>
              <i>Serverless actions</i>
            </div>
            <div className='flex flex-col items:center '>
              <div className='relative mx-auto h-[12rem] w-[18rem] 2xl:w-[20rem] mt-[3.25rem] mb-[3.5rem] 2xl:mb-[7.375rem]'>
                <Image
                  height='440'
                  width='320'
                  alt='Logo'
                  src='/assets/images/aws-lambda.png'
                  objectFit='cover'
                  className='h-full w-full rounded-md 2xl:rounded-lg'
                />
                <div className='hidden absolute h-[10rem] w-[15rem] 2xl:top-[60%] 2xl:left-[-25%]'>
                  <Image
                    height='440'
                    width='320'
                    alt='Logo'
                    src='/assets/images/aws-lambda-1.png'
                    objectFit='cover'
                    className='h-full w-full rounded-md 2xl:rounded-lg'
                  />
                </div>
              </div>
              <div className='cloud-text px-4 md:px-0'>
                Similar to Azure Functions, AWS Lambda, or GitHub Actions, our platform enables you to run code without managing servers, simplifying your workflow and saving valuable time and resources.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="clouds" className='h-full'>
        { Array.from({ length: 28 }).map((_, index) => (
          <div className={`cloud x${index + 1}`} />
        )) }
      </div>
    </div>
  )
}

export default Cloud;
