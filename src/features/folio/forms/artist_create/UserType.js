import React from 'react';
import { useFormik } from 'formik';
import { nanoid } from '@reduxjs/toolkit';

const UserType = ({ values, currentPage, handleChange }) => {
    const[artist, setArtist] = React.useState(null)

  return (
    <form className='flex flex-col space-y-4'>
        <h2>Please select the one option that best describes you.</h2>
        <div className='flex space-x-4'>
            <div onClick={() => setArtist(true)} className={artist ? "flex flex-col w-[50%] cursor-pointer rounded border-2 border-white text-amber-100 bg-teal-400/80 hover:bg-teal-200/80 hover:text-amber-900" : "flex flex-col w-[50%] cursor-pointer rounded border-2 border-orange p-4 text-amber-100 bg-teal-400/80 hover:bg-teal-200/80 hover:text-amber-900"}>
                <label className='flex flex-col items-center w-full h-full p-4'>
                    <input onChange={handleChange} id="regular_user" type="radio" name="isArtist" value={true} />
                    I'm an artist looking to create a great portfolio for the public to enjoy.
                </label>
            </div>

            <div className='flex flex-col w-[50%] cursor-pointer rounded border-2 border-white text-amber-100 bg-teal-400/80 hover:bg-teal-200/80 hover:text-amber-900'>
                <label className='flex flex-col items-center w-full h-full  p-4'>
                    <input onChange={handleChange} id="artist_user" type="radio" name="isArtist" value={false} />
                    I love art and want to explor new talents
                </label>
            </div>
        </div>
    </form>
  )
}

export default UserType