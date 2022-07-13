import React from 'react'
import { Link } from 'react-router-dom'

const DisplayCard = ({ artist }) => {
  return (
    <Link to={`/artists/${artist.id}`}>
      <div className='h-10 my-2 border rounded-md'>
        <h1>{artist.name}</h1>
        {/* <p>{artist.description}</p> */}
      </div>
    </Link>
  )
}

export default DisplayCard