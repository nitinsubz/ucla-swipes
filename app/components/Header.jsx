'use client';
import React, { useState } from 'react';
import { get11PSwipes, get14PSwipes, get19PSwipes } from '../endpoints';
import { NumberSlider, Swiper } from '.';

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

  const renderButton = (buttonNumber) => (
    <button
      key={buttonNumber}
      onClick={() => onButtonClick(buttonNumber)}
      className={`${
        selectedButton === buttonNumber
          ? 'bg-indigo-700 text-white'
          : 'bg-indigo-300 text-black'
      } mx-4 rounded px-4 py-2 font-bold`}
    >
      {buttonNumber}
    </button>
  );

  const onButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
    setElevenSwipes(elevenData.swipes - buttonNumber > 0 ? elevenData.swipes - buttonNumber : 0);
    setFourteenSwipes(fourteenData.swipes - buttonNumber > 0 ? fourteenData.swipes - buttonNumber : 0);
    setNinteenSwipes(ninteenData.swipes - buttonNumber > 0 ? ninteenData.swipes - buttonNumber : 0);
  };

  return (
    <div className=''>
      <div>
        <div className='text-center'>
          <div className='text-center'>
            <p className='text-3xl leading-loose'>
              After using{' '}
              <span className='text-blue-700'>{selectedButton}</span>{' '}
              {selectedButton === 1 ? 'swipe ' : 'swipes '}
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
              {[0, 1, 2, 3].map(renderButton)}
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
