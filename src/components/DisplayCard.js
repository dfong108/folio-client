import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArtist,
  selectGalleryEntry,
  selectedEntry,
} from "../features/artists/artistSlice";

const DisplayCard = ({ cardType, artist, data, entryArtist }) => {
  const dispatch = useDispatch();
  const foundEntry = useSelector(selectedEntry);

  switch (cardType) {
    case "artistCard":
      // const lookupArtist = () => {
      //   console.log("looking up artist!!!");
      //   dispatch(selectArtist(artist.id));
      // };
      const fullname = `${artist.first_name} ${artist.last_name}`;
      return (
        <Link to={`/artists/${artist.id}`}>
          <div
            onClick={() => dispatch(selectArtist({ artistID: artist.id }))}
            className=" container p-0 flex text-center justify-center w-full h-full md:"
          >
            <div className="container relative overflow-hidden h-[10rem] w-[10rem] md:h-[12em] md:w-[12em] border-2 rounded-md hover:text-orange hover:border-orange">
              <div className=" z-20 mx-auto text-xl md:text-[1.8rem] md:py-2 w-full bg-gray-900/75 ">
                <h1>{fullname}</h1>
              </div>
              <div className=" absolute w-full h-full bg-gray-900/30 hover:bg-zinc-300/20 z-10"></div>
              <img
                className=" absolute object-fill z-0"
                src={artist.gallery.entries[0].files[0].url}
                alt={fullname}
              />
            </div>
          </div>
        </Link>
      );

    case "galleryCard":
      return (
        <div>
          <h1>Gallery Card</h1>
        </div>
      );

    case "galleryEntryCard":
      return (
        <div
          onClick={() =>dispatch(selectGalleryEntry({artist: entryArtist,entry_id: data.entry_id,}))}
          className=" cursor-pointer container p-0 my-auto flex text-center justify-center w-full h-full md:relative"
        >
          <div
            className={
              data === foundEntry
                ? "container relative overflow-hidden h-[10rem] w-[10rem] md:h-40 md:w-40 border-2 rounded-md text-orange border-orange shadow-xl shadow-amber-600/30"
                : "container relative overflow-hidden h-[10rem] w-[10rem] md:h-40 md:w-40 border-2 rounded-md hover:text-orange hover:border-orange  hover:shadow-xl hover:shadow-amber-800/30"
              // ? "container relative overflow-hidden h-[10rem] w-[10rem] md:h-40 md:w-40 border-2 rounded-md text-orange border-orange shadow-xl shadow-amber-600/30"
              // : "container relative overflow-hidden h-[10rem] w-[10rem] md:h-40 md:w-40 border-2 rounded-md hover:text-orange hover:border-orange  hover:shadow-xl hover:shadow-amber-800/30"
            }
          >
            <div className=" z-20 mx-auto text-xl md:text-[1.8rem] md:py-2 w-full bg-gray-900/75 ">
            {/* <div className=" z-20 mx-auto text-xl md:text-4xl w-full bg-gray-900/75 "> */}
              <h1>{data.title}</h1>
            </div>
            <div className=" absolute w-full h-full bg-gray-900/30 hover:bg-gray-100/10 z-10"></div>
            <img
              className=" absolute object-fill z-0"
              src={data.files[0].url}
              alt={data.title}
            />
          </div>
        </div>
      );
    
    default: return
    }
};

export default DisplayCard;
