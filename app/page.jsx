'use client';

import addStartDates from '@/services/swipes/addStartDates';
import { Navbar, Header } from './components';
import Link from 'next/link';

export default function Home() {

  const handleClick = async () => {
    // go to database 
    let res = await addStartDates("w24", "09/23/23");
    console.log(res);
  } 

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
          <br></br>
            <br></br>
            <button onClick={() => handleClick()}>
              <div className='inline-block'>
                <div className='flex items-center justify-center rounded-2xl bg-indigo-500 p-5'>
                  <span className='text-white'>I'm Feeling Lucky</span>
                </div>
              </div>
            </button>
        </div>
      </div>
    </main>
  );
}
