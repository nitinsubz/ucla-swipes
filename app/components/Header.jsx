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
  const startDate = new Date('January 7, 2024');

  const elevenData = get11PSwipes({ startDate: startDate });
  const [elevenSwipes, setElevenSwipes] = useState(elevenData.swipes);

  const fourteenData = get14PSwipes({ startDate: startDate });
  const [fourteenSwipes, setFourteenSwipes] = useState(fourteenData.swipes);

  const ninteenData = get19PSwipes({ startDate: startDate });
  const [ninteenSwipes, setNinteenSwipes] = useState(ninteenData.swipes);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    setElevenSwipes(elevenData.swipes - event.target.value);
    setFourteenSwipes(fourteenData.swipes - event.target.value);
    setNinteenSwipes(ninteenData.swipes - event.target.value);
  };

  return (
    <div className=''>
      {startDate.getTime() < new Date().getTime() ||
        (true && (
          <div>
            <div className='text-center'>
              <div className='text-center'>
                <p className='text-3xl leading-loose'>
                  After using <span className='underline'>{sliderValue}</span>{' '}
                  swipe(s) today, {new Date().toLocaleString('en-US', options)},
                  you should have...
                </p>
              </div>
            </div>
            <div className=''>
              <div className='mt-5 flex flex-row items-center rounded-lg bg-white px-10 py-4'>
                <label
                  htmlFor='mySlider'
                  className='mb-2 text-lg font-semibold'
                >
                  Swipes used today
                </label>
                <input
                  type='range'
                  min='0'
                  max='7'
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className='ml-4 w-full bg-blue-50'
                  id='mySlider'
                />
              </div>
            </div>
          </div>
        ))}
      <div className='mb-10 flex flex-wrap rounded-b-lg pt-11 justify-evenly gap-10'>
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
