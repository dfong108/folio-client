import React from 'react'
import { Link } from 'react-router-dom'

const DisplayCard = ({ cardType, artist }) => {
  return (
    <Link to={`/artists/${artist.id}`}>
      <div className='relative overflow-hidden h-40 w-40 my-2 border rounded-md'>
        <div className='absolute z-10 mx-auto text-xl md:text-2xl w-full'>
          <h1>{artist.name}</h1>
        </div>
        <img
          className='absolute object-cover'
          src={artist.gallery.entries[0]} alt={artist.name} 
        />
      </div>
    </Link>
  )
}

export default DisplayCard