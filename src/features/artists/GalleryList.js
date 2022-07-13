import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allGalleries } from './artistSlice';

const GalleryList = () => {
  const galleries = useSelector(allGalleries)
    console.log(galleries)

  return (
    <div>GalleryList</div>
  )
}

export default GalleryList