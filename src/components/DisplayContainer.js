import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayCard from "./DisplayCard";

const DisplayContainer = ({ artistType, data, dataType }) => {
  // ADD SLIDER EFFECT WITH STATE
  const [scroll, setScroll] = useState();
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current)
  }, []);

  switch (dataType) {
    case "artists":
      return (
        // <div className='flex flex-wrap md:grid grid-rows-1 grid-cols-1 md:grid-cols-5 space-x-3 justify-center h-max my-3 rounded-sm text-center border'>
        <div className="flex flex-col md:w-full m-1 justify-center text-center">
          <div
            ref={carousel}
            className="carousel block md:flex justify-center rounded-md border bg-gray-900"
          >
            <div className="flex justify-center items-center md:w-10 p-2">
              <h3 className=" text-4xl mb-0 tracking-widest text-amber-400/60 md:rotate-[270deg]">
                {artistType}
              </h3>
            </div>
            <div
              className="inner-carousel bg-black flex justify-between space-x-2 overflow-y-scroll my-1 p-3 w-full rounded-md text-center border"
            >
              {data?.map((artist) => (
                <DisplayCard
                  key={artist.id}
                  cardType={"artistCard"}
                  artist={artist}
                />
              ))}
            </div>
          </div>
        </div>
      );

    case "galleries":
      return (
        // <div className='flex flex-wrap md:grid grid-rows-1 grid-cols-1 md:grid-cols-5 space-x-3 justify-center h-max my-3 rounded-sm text-center border'>
        <div className="container flex flex-col w-full m-1 mt-7 justify-center text-center">
          <h3 className="mt-1 text-4xl tracking-widest">{artistType}</h3>
          <div ref={carousel} className="container carousel">
            <div className="container inner-carousel flex space-x-2 overflow-hidden justify-between h-max my-1 p-3 rounded-md text-center border">
              {data?.map((gallery) => (
                <DisplayCard
                  key={gallery.artist.id}
                  cardType={"galleryCard"}
                  artist={gallery.artist}
                />
              ))}
            </div>
          </div>
        </div>
      );

    case "galleryEntries":
      return (
        // <div className='flex flex-wrap md:grid grid-rows-1 grid-cols-1 md:grid-cols-5 space-x-3 justify-center h-max my-3 rounded-sm text-center border'>
        <div className="md:container sm:px-2 flex flex-col w-full h-full md:p-1 justify-center md:text-center border-2 rounded-md bg-black">
          <h3 className="mt-1 md:py-3 md:text-4xl tracking-widest">Gallery</h3>
          <div ref={carousel} className="md:container carousel">
            <div className="md:container sm:p-2 inner-carousel flex md:flex-col overflow-x-scroll justify-between h-max my-1 md:p-3 md:space-y-4 rounded-md text-center border">
              {data.gallery.entries.map((entry) => (
                // <h2>{entry.title}</h2>
                <DisplayCard
                  key={entry.entry_id}
                  cardType="galleryEntryCard"
                  data={entry}
                  entryArtist={data}
                />
              ))}
            </div>
          </div>
        </div>
      );

    default:
      break;
  }
};

export default DisplayContainer;
