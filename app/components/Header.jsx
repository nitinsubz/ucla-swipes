'use client';
import React, { useState } from 'react';
import { get7PSwipes, get11PSwipes, get14PSwipes, get19PSwipes } from '../endpoints';
import { NumberSlider, Swiper } from '.';

const options = {
  timeZone: 'America/Los_Angeles',
  month: 'long', // Full month name
  day: 'numeric',
};

const Header = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const sevenData = get7PSwipes();
  const [sevenSwipes, setSevenSwipes] = useState(sevenData.swipes);
  
  const elevenData = get11PSwipes();
  const [elevenSwipes, setElevenSwipes] = useState(elevenData.swipes);

  const fourteenData = get14PSwipes();
  const [fourteenSwipes, setFourteenSwipes] = useState(fourteenData.swipes);

  const ninteenData = get19PSwipes();
  const [ninteenSwipes, setNinteenSwipes] = useState(ninteenData.swipes);

  const [showAlert, setShowAlert] = useState(true);
  
  // Function to handle changes in the dropdown selection
  const handleSelectChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedButton(value);
    setSevenSwipes(sevenData.swipes - value > 0 ? sevenData.swipes - value : 0);
    setElevenSwipes(elevenData.swipes - value > 0 ? elevenData.swipes - value : 0);
    setFourteenSwipes(fourteenData.swipes - value > 0 ? fourteenData.swipes - value : 0);
    setNinteenSwipes(ninteenData.swipes - value > 0 ? ninteenData.swipes - value : 0);
  };

  const handleClose = () => {
    setShowAlert(false);
  };
  
  return (
    <div className=''>
      <div>
        <div className='text-center'>
{/*           <p className='mt-3 rounded-lg bg-red-100 p-3 text-gray-500 text-xs'>
              It was brought to our attention that some of our numbers were incorrect recently. We sincerely apologize if this affected your meal swipe usage and we take full responsibility--getting this correct is the foundation for why this tool was built. Going forward, if you see any incorrect swipe counts, please email hello@uclaswipes.com and we will reward you with $100. 
          </p> */}
          { showAlert && (    
          <div id="alert-1" class="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium">
                It was brought to our attention that some of our numbers were incorrect recently. We sincerely apologize if this affected your meal swipe usage and we take full responsibility--getting this correct is the foundation for why this tool was built. Going forward, if you see any incorrect swipe counts, please email hello@uclaswipes.com and we will reward you with $100. 
            </div>
              <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close" onClick={handleClose}>
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
          </div>
          )}
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
              <select
                value={selectedButton}
                onChange={handleSelectChange}
                className="mx-4 rounded px-4 py-2 font-bold bg-indigo-300 text-black"
              >
                {[...Array(11).keys()].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-10 flex flex-wrap justify-evenly gap-10 rounded-b-lg pt-11 xl:justify-between'>
{/*         <Swiper
          Category={'7P'}
          swipes={sevenSwipes}
          exception={sevenData.exception}
        /> */}
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
