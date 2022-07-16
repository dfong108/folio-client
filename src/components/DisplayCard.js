import React from 'react'
import { Link } from 'react-router-dom'

const DisplayCard = ({ cardType, artist }) => {
  return (
    <Link to={`/artists/${artist.id}`}>
      <div className='relative overflow-hidden h-60 w-60 border rounded-md hover:text-orange'>
        <div className='absolute z-20 mx-auto text-xl md:text-4xl w-full bg-gray-900/75 '>
          <h1>{artist.name}</h1>
        </div>
        <div className="absolute w-full h-full bg-gray-900/40 hover:bg-gray-200/10 z-10"></div>
        <img
          className='absolute object-fill z-0'
          src={artist.gallery.entries[0]} alt={artist.name} 
        />
      </div>
    </Link>
  )
}

export default DisplayCard