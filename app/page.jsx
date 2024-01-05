'use client';

import Image from 'next/image';
import { Swiper, Navbar, Header } from './components';
import {
  get11PSwipes,
  get14PSwipes,
  get19PSwipes,
  getMeal,
  getTime,
} from './endpoints';
import { NumberSlider } from './components';
import Head from 'next/head';

export default function Home() {
  return (
    <main className='min-h-screen bg-indigo-100 pb-11 font-mono'>
      <Navbar />

      <div className='m-10'>
        <Header />
      </div>
    </main>
  );
}
