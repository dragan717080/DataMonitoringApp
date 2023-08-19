'use client';
import Image from 'next/image';
import { Header, Footer, Banner } from './(site)/components';
import { Provider } from 'react-redux';

import store from '../store';

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <div className="flex-1 col-v shadow-md">
        <main className="col-h min-h-screen justify-between min-w-[100%]">
          <div className='relative'>
          <div id="navbar-portal-root"></div>
          <div id="__next"></div>
          <div className="absolute top-5 w-[70%] mx-auto">
            <Banner />
          </div>
          </div>
        </main>
      </div>
      <Footer />
    </Provider>
  )
}
