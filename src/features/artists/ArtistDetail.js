import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  allArtists,
  foundArtist,
  selectedEntry,
  selectGalleryEntry,
} from "./artistSlice";
import DisplayContainer from "../../components/DisplayContainer";

import { LoremIpsum } from "react-lorem-ipsum";
import {
  AiFillRead, //AboutMe => Main Bio
  AiFillPhone, //Contact Me
  AiFillShopping, //Shop products and services
} from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";

const interact_Icons = [
  { icon: <AiFillRead />, description: "About Me" },
  { icon: <AiFillPhone />, description: "Contact" },
  { icon: <AiFillShopping />, description: "Shop" },
];

const ArtistDetail = () => {
  const dispatch = useDispatch();
  const [artist, setArtist] = useState(null);
  const [entries, setEntries] = useState(null);
  const { id } = useParams();
  const found = useSelector(foundArtist);
  const entrySelected = useSelector(selectedEntry);
  const fullname = `${artist?.first_name} ${artist?.last_name}`;

  const [displayBio, setDisplayBio] = useState(true);
  const [displayEntry, setDisplayEntry] = useState(entrySelected);
  const [entryVerified, setEntryVerified] = useState(false);
  const [showAux, setShowAux] = useState();

  useEffect(() => {
    setArtist(found);
    setEntries(found.gallery.entries);
    setDisplayBio(true);
    veryfyEntry();
  }, []);

  const veryfyEntry = () => {
    let selected_ID;
    if (entrySelected) {
      selected_ID = entrySelected.entry_id;
    }
    if (
      entries?.filter((entry) => entry.entry_id === selected_ID)[0] ===
      entrySelected
    ) {
      console.log("YAYA ENTRY MATCHES!!!!!");
      setEntryVerified(true);
      setDisplayBio(false);
      return;
    }
    console.log("ENTRY NOT IN HERE!!!");
    setEntryVerified(false);
    setDisplayEntry(null);
    dispatch(selectGalleryEntry(null));
  };

  useEffect(() => {
    setDisplayEntry(entrySelected);
    veryfyEntry();
  }, [entrySelected]);

  console.log(entries);
  console.log(entrySelected);
  // console.log(displayEntry);

  return (
    <div className="mainDisplay flex min-h-screen w-full px-0 justify-center text-center bg-red">
      {artist && (
        <div className=" bg-gray-700 flex flex-col md:grid grid-cols-12 w-full p-0 m-0">
          {/* -------------- GALLERY SIDEBAR -------------- */}
          <aside className=" md:col-span-3 md:row-span-full p-0 m-0">
            <DisplayContainer
              artistType={artist.artist_type}
              data={artist}
              dataType="galleryEntries"
            />
          </aside>

          <div className="relative flex-col justify-around col-span-9 border-2 rounded-lg">
            {/* -------------- BIOGRAPHY -------------- */}
            <section
              className={
                displayBio
                  ? `absolute mainSection bg-gray-800/40 flex flex-col justify-between p-4 h-[70%] text-2xl font-sans`
                  : `hidden`
              }
            >
              <h1 className="flex w-full m-4 font-monoton text-[200%]">
                {fullname}
              </h1>
              <div>
                <LoremIpsum p={1} />
                {/* {artist.about ? artist.about : <LoremIpsum p={1} />} */}
              </div>
              <div></div>
              {/* Media Icons */} Media Icons
            </section>
            {/* -------------- GALLERY -------------- */}
            {entrySelected != null && veryfyEntry && (
              <section className="mainSection z-10 bg-orange flex flex-col justify-between p-4 h-[70%] text-2xl font-sans">
                <h1 className="flex w-full m-4 font-monoton text-[200%]">
                  {entrySelected.title}
                </h1>
                <div className="bg-gray-600"></div>
              </section>
            )}
            {/* -------------- CONTACT -------------- */}
            {showAux === "contact" && (
              <section>
                <h1 className="flex w-full m-4 font-monoton text-[200%]">
                  Contact
                </h1>
              </section>
            )}
            {/* -------------- SHOP -------------- */}
            {showAux === "shop" && (
              <section>
                <h1 className="flex w-full m-4 font-monoton text-[200%]">
                  Shop
                </h1>
              </section>
            )}

            {/* -------------- ICONS -------------- */}
            <section className="bg-gray-900/60 flex flex-col justify-end w-full mb-0 mt-[34rem] h-[30%] bg-red ">
              <div className="interact-icons flex w-full h-[50%] justify-start space-x-6 p-2 text-sand bg-black border rounded-md">
                <div>
                  <AiFillRead
                    size={60}
                    name="about"
                    className="bg-gray-900/70 h-full w-auto p-2 rounded-md border hover:border-violet-700"
                  />
                </div>
                <div>
                  <AiFillPhone
                    size={60}
                    name="contact"
                    className="bg-gray-900/70 h-full w-auto p-2 rounded-md border hover:border-violet-700"
                  />
                </div>
                <div>
                  <BsFillShareFill
                    size={60}
                    name="share"
                    className="bg-gray-900/70 h-full w-auto p-2 rounded-md border hover:border-violet-700"
                  />
                </div>
                <div>
                  <AiFillShopping
                    size={60}
                    name="shop"
                    className="bg-gray-900/70 h-full w-auto p-2 rounded-md border hover:border-violet-700"
                  />
                </div>
              </div>
              <div className="interact-icons flex w-full h-[50%] justify-start space-x-6 p-2 text-sand bg-black border rounded-md">
                <AiFillRead
                  size={60}
                  className="bg-gray-900/70 h-full w-auto p-2"
                />
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistDetail;
