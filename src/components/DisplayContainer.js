import React, { useState, useEffect } from 'react';
import DisplayCard from './DisplayCard';

const DisplayContainer = ({ artistType, artists }) => {


  return (
    // <div className='flex flex-wrap md:grid grid-rows-1 grid-cols-1 md:grid-cols-5 space-x-3 justify-center h-max my-3 rounded-sm text-center border'>
    <div className='m-1 mt-7'>
        <h3 className='mt-1 text-4xl tracking-widest'>{artistType}</h3>
        <div className='flex flex-wrap space-x-3 justify-between h-max my-1 px-1 rounded-sm text-center border'>
            {
                artists?.map(artist => (
                    <DisplayCard key={artist.id} cardType={'artistCard'} artist={artist} />
                ))
            }        
        </div>
    </div>
  )
}

export default DisplayContainer