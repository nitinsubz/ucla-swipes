'use client';

import React, { useState } from 'react';

const NumberSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className='mt-5 flex flex-row items-center rounded-lg bg-white px-10 py-4'>
      <label htmlFor='mySlider' className='mb-2 text-lg font-semibold'>
        Swipes used today
      </label>
      <input
        type='range'
        min='0'
        max='15'
        value={sliderValue}
        onChange={handleSliderChange}
        className='w-full'
        id='mySlider'
      />
      <div className='m-4 text-xl'>{sliderValue}</div>
    </div>
  );
};

export default NumberSlider;
