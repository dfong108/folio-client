import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allArtists, artistTypes, artistsByType } from './artistSlice';

import HeroBanner from '../../components/HeroBanner';
import DisplayContainer from '../../components/DisplayContainer';
import { nanoid } from '@reduxjs/toolkit';

const ArtistList = () => {

    const sortedArtists = useSelector(artistsByType)

    const message = "Artists"

  return (
    <div className='flex flex-col min-h-screen w-full justify-center text-center'>
        <HeroBanner message={message} data={sortedArtists} />
        <div className='flex flex-col w-[99%] '>
          {
            sortedArtists.map((entry, i) => (
              <DisplayContainer key={i} artistType={entry.artist_type} data={entry.artists} dataType="artists" />
            ))
          }
        </div>
    </div>
  )
}

export default ArtistList