'use client';
import React, { useState } from 'react';
import { get11PSwipes, get14PSwipes, get19PSwipes } from '../endpoints';
import { Swiper } from '.';
import { button } from '@nextui-org/react';

const options = {
  timeZone: 'America/Los_Angeles',
  month: 'long', // Full month name
  day: 'numeric',
};

const Header = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const elevenData = get11PSwipes();
  const [elevenSwipes, setElevenSwipes] = useState(elevenData.swipes);

  const fourteenData = get14PSwipes();
  const [fourteenSwipes, setFourteenSwipes] = useState(fourteenData.swipes);

  const ninteenData = get19PSwipes();
  const [ninteenSwipes, setNinteenSwipes] = useState(ninteenData.swipes);

  const onButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
    setElevenSwipes(elevenData.swipes - buttonNumber);
    setFourteenSwipes(fourteenData.swipes - buttonNumber);
    setNinteenSwipes(ninteenData.swipes - buttonNumber);
  };

  return (
    <div className=''>
      <div>
        <div className='text-center'>
          <div className='text-center'>
            <p className='text-3xl leading-loose'>
              After using{' '}
              <span className='text-blue-700'>{selectedButton}</span> swipe(s)
              today, {new Date().toLocaleString('en-US', options)}, you should
              have...
            </p>
          </div>
        </div>
        <div className=''>
          <div className='mt-5 flex flex-col items-center justify-center rounded-lg bg-white px-10 sm:flex-row'>
            <a className='py-4 text-center text-lg font-semibold'>
              Swipes Used Today
            </a>
            <div className='flex flex-row py-4'>
              <button
                onClick={() => onButtonClick(0)}
                className={`${
                  selectedButton === 0
                    ? 'bg-indigo-700 text-white'
                    : 'bg-indigo-300 text-black'
                } mx-4 rounded px-4 py-2 font-bold `}
              >
                0
              </button>
              <button
                onClick={() => onButtonClick(1)}
                className={`${
                  selectedButton === 1
                    ? 'bg-indigo-700 text-white'
                    : 'bg-indigo-300 text-black'
                } mx-4 rounded px-4 py-2 font-bold `}
              >
                1
              </button>
              <button
                onClick={() => onButtonClick(2)}
                className={`${
                  selectedButton === 2
                    ? 'bg-indigo-700 text-white'
                    : 'bg-indigo-300 text-black'
                } mx-4 rounded px-4 py-2 font-bold `}
              >
                2
              </button>
              <button
                onClick={() => onButtonClick(3)}
                className={`${
                  selectedButton === 3
                    ? 'bg-indigo-700 text-white'
                    : 'bg-indigo-300 text-black'
                } mx-4 rounded px-4 py-2 font-bold `}
              >
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
