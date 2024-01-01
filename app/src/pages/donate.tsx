import React from 'react';

import Image from 'next/image';

const DonatePage = () => {
  return (
    <div>
      <div className='bg-black relative'>
        <div className='absolute z-0 w-full h-screen flex items-center'>
          <video
            webkit-playsinline
            playsInline
            muted
            autoPlay
            loop
            data-not-lazy
          >
            <source src='/videos/astar.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='mix-blend-screen'>
          <Image
            className='absolute z-[-1] w-full h-full'
            src='/images/zkevm-bg.webp'
            alt=''
            width='1728'
            height='1429'
            data-not-lazy
          />
          <Image
            className='absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover'
            src='/images/space-cloud.webp'
            alt=''
            width='1728'
            height='1281'
            data-not-lazy
          />
          <Image
            className='fixed z-[2] portrait:h-screen landscape:w-screen object-cover'
            src='/images/space-stars.svg'
            alt=''
            width='1728'
            height='1728'
            data-not-lazy
          />
          <div className='text-center h-screen flex items-center justify-center z-10 relative'>
            <div className='max-w-4xl px-4 sm:px-6 pt-12'>
              <h1 className='text-3xl sm:text-6xl lg:text-9xl font-extrabold leading-none drop-shadow tracking-tight'>
                The Frontier of Innovation.
              </h1>
              <p className='sm:text-xl mt-6 sm:mt-10 mb-8 sm:mb-14'>
                Your localized hero description here
              </p>
              <div className='sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-4'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
