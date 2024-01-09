'use client';
import React, { useState } from 'react';
import { get11PSwipes, get14PSwipes, get19PSwipes } from '../endpoints';
import { Swiper } from '.';

const options = {
  timeZone: 'America/Los_Angeles',
  month: 'long', // Full month name
  day: 'numeric',
};

const Header = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const elevenData = get11PSwipes();
  const [elevenSwipes, setElevenSwipes] = useState(elevenData.swipes);

  const fourteenData = get14PSwipes();
  const [fourteenSwipes, setFourteenSwipes] = useState(fourteenData.swipes);

  const ninteenData = get19PSwipes();
  const [ninteenSwipes, setNinteenSwipes] = useState(ninteenData.swipes);

  const handleSliderChange = (event) => {
    console.log(event);
    setSliderValue(event.target.value);
    setElevenSwipes(elevenData.swipes - event.target.value);
    setFourteenSwipes(fourteenData.swipes - event.target.value);
    setNinteenSwipes(ninteenData.swipes - event.target.value);
  };

  return (
    <div className=''>
      <div>
        <div className='text-center'>
          <div className='text-center'>
            <p className='text-3xl leading-loose'>
              After using <span className='text-blue-700'>{sliderValue}</span>{' '}
              swipe(s) today, {new Date().toLocaleString('en-US', options)}, you
              should have...
            </p>
          </div>
        </div>
        <div className='' ontouchstart="">
          <div className='mt-5 flex flex-col items-center rounded-lg bg-white px-10 sm:flex-row justify-center'>
            <a className= 'text-center text-lg font-semibold py-4'>
              Swipes Used Today
            </a>
            <div className='py-4 flex flex-row'>
              <button onClick={handleSliderChange} className='mx-4 rounded bg-indigo-300 px-4 py-2 font-bold text-black focus:bg-indigo-700 focus:text-white' value={0}>
                0
              </button>
              <button onClick={handleSliderChange} className='mx-4 rounded bg-indigo-300 px-4 py-2 font-bold text-black focus:bg-indigo-700 focus:text-white' value={1}>
                1
              </button>
              <button onClick={handleSliderChange} className='mx-4 rounded bg-indigo-300 px-4 py-2 font-bold text-black focus:bg-indigo-700 focus:text-white' value={2}>
                2
              </button>
              <button onClick={handleSliderChange} className='mx-4 rounded bg-indigo-300 px-4 py-2 font-bold text-black focus:bg-indigo-700 focus:text-white' value={3}>
                3
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-10 flex flex-wrap justify-evenly gap-10 rounded-b-lg pt-11 xl:justify-between'>
        <Swiper
          Category={'11P'}
          swipes={elevenSwipes}
          exception={elevenData.exception}
        />
        <Swiper
          Category={'14P'}
          swipes={fourteenSwipes}
          exception={fourteenData.exception}
        />
        <Swiper
          Category={'19P'}
          swipes={ninteenSwipes}
          exception={ninteenData.exception}
        />
      </div>
    </div>
  );
};

export default Header;
