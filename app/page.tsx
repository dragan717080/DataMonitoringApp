'use client';
import Image from 'next/image';
import { Header, Footer } from './(site)/components';
import { Provider } from 'react-redux';
import store from '../store';

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <div className="flex-1 col-v shadow-md">
        <main className="col-h min-h-screen justify-between min-w-[100%]">
          1
          <div id="navbar-portal-root"></div>
          <div id="__next"></div>
        </main>
      </div>
      <Footer />
    </Provider>
  )
}
