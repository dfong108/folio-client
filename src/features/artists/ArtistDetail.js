import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allArtists } from './artistSlice';


const ArtistDetail = () => {
  const [artist, setArtist] = useState()

  const {id} = useParams()
  const artists = useSelector(allArtists)
  const found = artists.find(artist => artist.id === id)

  useEffect(() => {
    setArtist(found)
  }, [])


  return (
    <div>ArtistDetail

      {artist && <h1>{artist.name}</h1>}
    </div>
  )
}

export default ArtistDetail