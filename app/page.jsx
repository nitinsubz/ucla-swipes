'use client';

import { Navbar, Header } from './components';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-indigo-100 pb-11 font-mono'>
      <Navbar />

      <div className='m-10'>
        <Header />
        <div className='text-center'>
          <Link
            href='https://myhousing.hhs.ucla.edu/shib/swipes'
            target='_blank'
          >
            <div className='inline-block'>
              <div className='flex items-center justify-center rounded-2xl bg-indigo-500 p-5'>
                <span className='text-white'>View My Current Balance</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
