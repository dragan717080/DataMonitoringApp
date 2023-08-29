import React, { FC } from 'react';
import Image from 'next/image';
import '../../styles/cloud.css';

const Cloud: FC = () => {
  return (
    <div className='my-10 w-full absolute left-0 h-[40rem] overflow-hidden'>
      <div className="col-v absolute h-[80%] w-[60%] row top-[10%] left-[20%] z-10">
        <div className='bg-gray-600 h-full w-full rounded-xl'>
          <div className="grid grid-cols-2 gap-x-10 h-full">
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
              <div className='relative mx-auto h-[12rem] w-[20rem] mt-[3.25rem] mb-[7.5rem]'>
                <Image
                  height='440'
                  width='320'
                  alt='Logo'
                  src='/assets/images/aws-lambda.png'
                  objectFit='cover'
                  className='h-full w-full'
                />
                <div className='absolute h-[10rem] w-[15rem] 2xl:top-[60%] 2xl:left-[-25%]'>
                  <Image
                    height='440'
                    width='320'
                    alt='Logo'
                    src='/assets/images/aws-lambda-1.png'
                    objectFit='cover'
                    className='h-full w-full'
                  />
                </div>
              </div>
              <div className='cloud-text'>
                Similar to Azure Functions, AWS Lambda, or GitHub Actions, our platform enables you to run code without managing servers, simplifying your workflow and saving valuable time and resources.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="clouds" className='h-full'>
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
        <div className="cloud x6"></div>
        <div className="cloud x7"></div>
        <div className="cloud x8"></div>
        <div className="cloud x9"></div>
        <div className="cloud x10"></div>
        <div className="cloud x11"></div>
        <div className="cloud x12"></div>
        <div className="cloud x13"></div>
        <div className="cloud x14"></div>
        <div className="cloud x15"></div>
        <div className="cloud x16"></div>
        <div className="cloud x17"></div>
        <div className="cloud x18"></div>
        <div className="cloud x19"></div>
        <div className="cloud x20"></div>
        <div className="cloud x21"></div>
        <div className="cloud x22"></div>
        <div className="cloud x23"></div>
        <div className="cloud x24"></div>
      </div>
    </div>
  )
}

export default Cloud;
