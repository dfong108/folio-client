import React from 'react';
import { useFormik } from 'formik';
import { nanoid } from '@reduxjs/toolkit';

const MainInfo = ({ values, currentPage, handleChange }) => {

  // console.log(values)
  
  // first_name
  // last_name
  // email
  // password

  return (
    <form>
      <div className='flex flex-col text-center justify-between m-2 space-y-3 w-full'>
        <label className='flex justify-between px-40'>
          first name:
          <input className='rounded-md px-1 text-black lowercase' onChange={handleChange} type="text" placeholder="First Name" name="first_name" />
        </label>
        <label className='flex justify-between px-40'>
          last name: 
          <input className='rounded-md px-1 text-black lowercase' onChange={handleChange} type="text" placeholder="Last Name" name="last_name" />
        </label>
      </div>

      <div className='flex flex-col justify-between m-2 space-y-3 w-full'>
        <label className='flex justify-between px-40'>
          email:
          <input className='rounded-md px-1 text-black lowercase' onChange={handleChange} type="email" placeholder="email" name="email" />
        </label>
        <label className='flex justify-between px-40'>
          password:
          <input className='rounded-md px-1 text-black lowercase' onChange={handleChange} type="password" placeholder="password" name="password" />
        </label>
        <label className='flex justify-between px-40'>
          confirm password:
          <input className='rounded-md px-1 text-black lowercase' onChange={handleChange} type="password" placeholder="password" name="password" />
        </label>
      </div>
    </form>
  )
}

export default MainInfo