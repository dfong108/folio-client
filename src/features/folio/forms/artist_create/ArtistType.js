import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { artistTypes } from '../../../artists/artistSlice';

const ArtistType = ({ values, currentPage, handleChange }) => {
    
    const types = useSelector(artistTypes);

    // artist_type
    // alias
    // about

  return (
    <form className='text-center'>
          <h1 className='text-[2.5rem] mb-4'>Which of the following best describes your art?</h1>

      <div className='flex justify-around m-2 space-x-3 w-full'>

          <select name="artist_type" id="artist_type" onChange={handleChange}
          className="rounded-md text-black"
          >
            <option defaultChecked value={null}>Select One</option>
          {
            types?.map((type, i) => (
                <option key={i} value={type}>{type}</option>
              ))
            }
          </select>

          {/* <div className='flex space-x-2'>
            other:
            <input onChange={handleChange} className='rounded-md px-1 text-black lowercase' type="text" id="other" name="artist_type" placeholder="add a different type"/>
          </div> */}

      </div>
    </form>
  )
}

export default ArtistType