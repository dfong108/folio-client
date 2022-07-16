import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allGalleries, galleriesByType } from './artistSlice';

import HeroBanner from '../../components/HeroBanner';
import DisplayContainer from '../../components/DisplayContainer';
import { nanoid } from '@reduxjs/toolkit';

const GalleryList = () => {

    const sortedGalleries = useSelector(galleriesByType)
    console.log(sortedGalleries)

    const message = "Galleries"

  
  return (
    <div className='flex flex-col min-h-screen w-full justify-center text-center'>
        <HeroBanner message={message} data={sortedGalleries} />
        <div className='flex flex-col w-[99%] '>
          {
            sortedGalleries.map((entry, i) => (
              <DisplayContainer key={i} artistType={entry.type} data={entry.galleries} dataType="galleries" />
            ))
          }
        </div>
    </div>
  )
}

export default GalleryList