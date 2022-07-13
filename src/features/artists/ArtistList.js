import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allArtists, artistTypes } from './artistSlice';

import HeroBanner from '../../components/HeroBanner';
import DisplayContainer from '../../components/DisplayContainer';

const ArtistList = () => {

    const artists = useSelector(allArtists)
    const types = useSelector(artistTypes)

    let sortedByType = []
    types?.forEach((type, i) => {
      let temp = artists.filter(artist => artist.artist_type === type)
      sortedByType.push({'artist_type': type, 'artists': temp})
    })


  return (
    <div>
        <HeroBanner artists={artists} />
        {
          sortedByType.map((entry, i) => (
            <DisplayContainer key={i} artistType={entry.artist_type} artists={entry.artists} />
          ))
        }
    </div>
  )
}

export default ArtistList