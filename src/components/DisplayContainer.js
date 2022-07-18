import React, { useState, useEffect, useRef } from 'react';
import DisplayCard from './DisplayCard';

const DisplayContainer = ({ artistType, data, dataType }) => {
  // ADD SLIDER EFFECT WITH STATE
  const [scroll, setScroll] = useState()
  const carousel = useRef()

  useEffect(() => {
    // console.log(carousel.current)
  }, [])
  
  switch (dataType) {
    case 'artists':
      return (
        // <div className='flex flex-wrap md:grid grid-rows-1 grid-cols-1 md:grid-cols-5 space-x-3 justify-center h-max my-3 rounded-sm text-center border'>
        <div className='flex flex-col md:w-full m-1 mt-7 justify-center text-center'>
            <h3 className='mt-1 text-4xl tracking-widest'>{artistType}</h3>
            <div ref={carousel} className='carousel block md:flex justify-center  bg-red'>
              <div className='relative inner-carousel bg-green-600 block md:flex space-x-2 overflow-hidden my-1 p-3 rounded-md text-center border'>
                  {
                      data?.map(artist => (
                          <DisplayCard key={artist.id} cardType={'artistCard'} artist={artist} />
                      ))
                  }        
              </div>
            </div>
        </div>
      )
    case 'galleries':
      return (
        // <div className='flex flex-wrap md:grid grid-rows-1 grid-cols-1 md:grid-cols-5 space-x-3 justify-center h-max my-3 rounded-sm text-center border'>
        <div className='container flex flex-col w-full m-1 mt-7 justify-center text-center'>
            <h3 className='mt-1 text-4xl tracking-widest'>{artistType}</h3>
            <div ref={carousel} className='container carousel'>
              <div className='container inner-carousel flex space-x-2 overflow-hidden justify-between h-max my-1 p-3 rounded-md text-center border'>
                  {
                      data?.map(gallery => (
                          <DisplayCard key={gallery.artist.id} cardType={'galleryCard'} artist={gallery.artist} />
                      ))
                  }        
              </div>
            </div>
        </div>
      ) 
  
    default:
      break;
  }

}

export default DisplayContainer