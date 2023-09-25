'use client';
import Image from 'next/image';
import { Header, Footer, Banner, Logs, Circle, Quotes, Testimonials, Cloud, FeaturesListing } from './(site)/components';
import { Provider } from 'react-redux';

import store from '../store';

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <section className="col-h justify-between min-w-[100%]">
          <div className='relative'>
            <div id="navbar-portal-root" className='mt-[-6px]'></div>
            <div id="__next"></div>
          </div>
        </section>
      </div>
      <main className='-mt-6 bg-light'>
        <div className="top-12 left-0">
          <Banner />
          <div className="mt-10 px-[3%] md:px-[72px] xl:px-24 2xl:px-32 max-w-[100vw]">
            <FeaturesListing />
            <Circle />
            <Quotes />
          </div>
          <Cloud />
        </div>
      </main>
      <Footer />
    </Provider>
  )
}
