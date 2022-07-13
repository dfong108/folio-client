import React, { useState, useEffect } from 'react';
import DisplayCard from './DisplayCard';

const DisplayContainer = ({ artistType, artists }) => {


  return (
    <div className='grid grid-rows-auto grid-cols-12 md:grid-rows-4 space-x-3 justify-center text-center border rounded-sm sm:my-4'>
        <div className='cols-span-2'>
            <h3>{artistType}</h3>
        </div>
        <div className='sm:relative flex flex-wrap col-span-10 justify-between sm:my-4 bg-gray-100/20'>
            {
                artists?.map(artist => (
                    <DisplayCard key={artist.id} type={'artistCard'} artist={artist} />
                ))
            }
        </div>

    </div>
  )
}

export default DisplayContainer