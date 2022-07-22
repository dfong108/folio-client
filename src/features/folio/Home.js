import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allArtists, artistTypes, artistsByType } from "../artists/artistSlice";

import HeroBanner from "../../components/HeroBanner";
import DisplayContainer from "../../components/DisplayContainer";
import { nanoid } from "@reduxjs/toolkit";

const ArtistList = () => {
  const sortedArtists = useSelector(artistsByType);
  // console.log(sortedArtists[0].artists[0]);
  const message = "FOLIO";


  return (
    <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-4 min-h-screen mx-auto w-[98vw] h-full justify-center text-center">
     
      <div className="container flex flex-col w-full h-full md:col-start-1 md:col-end-4 p-1 justify-center text-center border-2 rounded-md bg-black">
        <h3 className="mt-1 text-4xl tracking-widest">Explore</h3>
        <div className="container w-full h-full border border-sand rounded-md">
          
        </div>
      </div>

      {/* <HeroBanner message={message} data={sortedArtists} /> */}
      <div className="flex flex-col md:col-start-4 md:col-end-13 md:row-end- ">
        {sortedArtists.map((entry, i) => (
          <DisplayContainer
            key={i}
            artistType={entry.artist_type}
            data={entry.artists}
            dataType="artists"
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
