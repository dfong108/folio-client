import React from 'react';
import Banner_1 from '../assets/art-banner-1.jpg';

const HeroBanner = ({ data, message }) => {
  return (
    <div className='flex flex-col relative h-[50%] font-monoton'>
      <h1 className='absolute text-9xl z-10 translate-y-[0%] pl-2 underline text-[4rem] md:text-[6rem] lg:text-[8rem]'>{message || 'Folio'}</h1>
      <div className='absolute z-10 top-[80%] left-[60%] tracking-wider'>
        <p>Making art a buisness<br/>Making business an art</p>
      </div>
      {/* <p className='translate-x-3/4'>Where business meets creativity</p> */}
      <img className='max-h-[50vh] w-[100%] object-cover' src={Banner_1} alt='hero banner' />
      <div className='absolute w-full h-full z-0 top-0 left-0 bg-gray-900/30'></div>
    </div>
  )
}

export default HeroBanner