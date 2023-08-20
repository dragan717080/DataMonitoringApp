import { FC } from 'react';
import { socialsSvgPaths } from '@/config/svgPaths';
import { StringObject } from '@/app/interfaces/types';

const Footer: FC = () => {
  return (
    <footer className='bg-gray-600 py-8 px-7 md:px-10'>
      <div className='col-h space-y-4'>
        <div className="row space-x-4 text-white semibold">
          {['Privacy', 'Sitemap', 'Languages & Frameworks', 'Terms of Use']
            .map((item: string, index: number) => (
              <div className='hover:text-red-400 pointer' key={index}>{item}</div>
            ))}
        </div>
        <div className="row-h space-x-4">
          {Object.keys(socialsSvgPaths).map((socialIcon: keyof typeof socialsSvgPaths, index: number) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className='h-6 w-6 fill-red-400 hover:fill-sky-500 transition transform duration-500 pointer hover:-mt-1'
              viewBox="0 0 24 24"
              key={index}
            >
              <path d={socialsSvgPaths[socialIcon]} />
            </svg>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
