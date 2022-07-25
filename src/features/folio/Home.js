import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allArtists, artistTypes, artistsByType, selectArtist } from "../artists/artistSlice";

import HeroBanner from "../../components/HeroBanner";
import DisplayContainer from "../../components/DisplayContainer";
import { nanoid } from "@reduxjs/toolkit";

const ArtistList = () => {
  const dispatch = useDispatch();
  const sortedArtists = useSelector(artistsByType);
  const unsortedArtists = useSelector(allArtists);
  const [artistLookup, setArtistLookup] = useState([]);
  const [lookupValue, setLookupValue] = useState();

 
  // console.log(sortedArtists[0].artists[0]);
  const message = "FOLIO";
 
  const handleInputChange = (e) => {
    const { name, value } = e.target
    if(name==='first_name') {
      let temp = unsortedArtists.filter(artist => artist.first_name.toLowerCase().includes(value.toLowerCase()) || artist.last_name.toLowerCase().includes(value.toLowerCase()))
      setArtistLookup(temp)
      console.log(temp)
      setArtistLookup(temp)
    } 
    setLookupValue(value)

  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-4 min-h-screen mx-auto w-[98vw] h-full justify-center text-center">
     
      <div className="container flex flex-col w-full h-full md:col-start-1 md:col-end-4 p-1 justify-start text-center border-2 rounded-md bg-black">
        <h3 className="mt-1 text-4xl tracking-widest">Explore</h3>

        <div className="container flex flex-col text-center items-center p-auto w-full border border-sand rounded-md">
      {/* --- Search by Name ---- */}
          <form className="flex flex-col p-2 mb-2 justify-start text-center items-center">
              <label htmlFor="first_name">
                Seach Artists by name
                <input
                  className="form_input_half w-full mx-auto border-2 border-orange"
                  type="text"
                  name="first_name"
                  value={lookupValue}
                  onChange={(e) => handleInputChange(e)}
                >
                </input>
              </label>
              <div
                className=" w-full border-2 border-sand rounded-md bg-gray-600/40 hover:bg-amber-800/90 text-2xl cursor-pointer"
                onClick={() => setArtistLookup(null)}
              >Reset</div>

          </form>
        </div>

        <div>
          {artistLookup != null && (
            <ul>
              {artistLookup.map(artist => (
                <Link to={`/artists/${artist.id}`} key={artist.id}>
                  <div onClick={() => dispatch(selectArtist({ artistID: artist.id }))}>
                    <li
                      className='flex justify-between p-3 px-6 border-t-2 border-white rounded hover:bg-gray-800/80'
                    ><span className="text-xl">{artist.first_name} {artist.last_name}</span>
                    <span className="text-zinc-100/50">{artist.artist_type}</span>
                    </li>
                  </div>

                </Link>
              ))}
            </ul>
          )}
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
