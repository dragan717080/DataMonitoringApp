'use client';
import Image from 'next/image';
import { Header, Footer, Banner, Logs, Circle, Quotes, Partners } from './(site)/components';
import { Provider } from 'react-redux';

import store from '../store';

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <div className="flex-1 col-v shadow-md bg-light">
        <section className="col-h min-h-screen justify-between min-w-[100%]">
          <div className='relative'>
            <div id="navbar-portal-root" className='mt-[-6px]'></div>
            <div id="__next"></div>
          </div>
        </section>
        <main className='px-3 md:px-12 min-h-[171rem] md:min-h-[67rem] 2xl:min-h-[81rem] bg-light'>
          <div className="absolute top-12 left-0">
            <Banner />
            <div className="mt-10 px-[3%] md:px-[72px] xl:px-24 2xl:px-32 max-w-[100vw]">
              <Logs />
              <Circle />
              <Quotes />
              <Partners />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Provider>
  )
}
