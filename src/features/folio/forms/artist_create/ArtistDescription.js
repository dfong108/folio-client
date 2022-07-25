import React from 'react'

const ArtistDescription = ({ values, currentPage, handleChange }) => {


  return (
    <div className='flex flex-col space-y-2'>
        <div className='flex flex-col w-full'>
            <label>
                Do you have an alias?
                <input onChange={handleChange} id="artist_alias" name="alias" placeholder='alias' className='rounded-md px-1 text-black lowercase h-[80%] w-full flex text-left items-start justify-start'/>
            </label>
        </div>
        <div className='flex flex-col h-[20rem] w-full'>
            <label>
                What would you like your audience to know about you?
                <textarea onChange={handleChange} type="textarea" id="artist_description" name="about" placeholder='biography...' className='rounded-md px-1 text-black lowercase h-full w-full flex text-left items-start justify-start'/>
            </label>
        </div>
    </div>
  )
}

export default ArtistDescription