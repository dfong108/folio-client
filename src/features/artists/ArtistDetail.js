import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  // allArtists,
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

const ArtistDetail = () => {
  const dispatch = useDispatch();
  const [artist, setArtist] = useState(null);
  // const [showImage, setShowImage] = useState(null);
  const [entries, setEntries] = useState(null);
  // const { id } = useParams();
  const found = useSelector(foundArtist);
  const entrySelected = useSelector(selectedEntry);
  const fullname = `${artist?.first_name} ${artist?.last_name}`;

  const [displayEntry, setDisplayEntry] = useState(entrySelected);
  const [entryVerified, setEntryVerified] = useState(false);
  const [showInfo, setShowInfo] = useState("about");

  useEffect(() => {
    setArtist(found);
    setEntries(found.gallery.entries);
    setEntryVerified(false);
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
      setShowInfo("");
      return;
    }
    console.log("ENTRY NOT IN HERE!!!");
    setEntryVerified(false);
    setDisplayEntry(null);
    dispatch(selectGalleryEntry(null));
  };

  const handleDisplaySections = (name) => {
    setShowInfo(name);
    dispatch(selectGalleryEntry(null));
    setEntryVerified(false);
  };

  useEffect(() => {
    setDisplayEntry(entrySelected);
    veryfyEntry();
  }, [entrySelected]);

  // console.log(entries);
  // console.log(displayEntry);

  return (
    <div className="mainDisplay flex min-h-screen w-full px-0 pt-0 justify-center text-center bg-red">
      {artist && (
        <div className=" bg-gray-700 flex flex-col-reverse md:grid grid-cols-12 md:grid-rows-4 w-full p-0 m-0">
          {/* -------------- GALLERY SIDEBAR -------------- */}
          <aside className="flex flex-wrap md:col-span-2 md:row-span-full w-full p-0 m-0">
            <DisplayContainer
              artistType={artist.artist_type}
              data={artist}
              dataType="galleryEntries"
            />
          </aside>

          <div className="flex flex-col-reverse  col-span-10 md:row-span-full border-2 rounded-lg">
            {/* -------------- BIOGRAPHY -------------- */}
            <section
              className={
                showInfo === "about"
                  ? `about_section bg-gray-800/40 container flex flex-col justify-around p-4 h-full w-[100%] text-2xl font-sans`
                  : `hidden`
              }
            >
              <h1 className="flex w-full m-4 font-monoton md:text-[200%]">
                {fullname}
              </h1>
              <div className="container flex flex-col justify-evenly md:space-y-5 w-full h-80 md:min-h-[60%]">
                <LoremIpsum p={1} />
                {/* {artist.about ? artist.about : <LoremIpsum p={1} />} */}
              </div>
            </section>
            {/* -------------- GALLERY -------------- */}
            <section
              className={
                entrySelected != null && entryVerified
                  ? `about_section bg-gray-800/40 container flex flex-col justify-between min-h-[90%] w-[100%] p-4 text-2xl font-sans`
                  : `hidden`
              }
            >
              <div className="container flex flex-col justify-evenly md:space-y-5 w-full h-40 md:min-h-[60%]">
                <h1 className="flex w-full md:m-2 md:mb-0 font-monoton md:text-[3rem]">
                  {entrySelected?.title}
                </h1>
                <div className="container bg-gray-600 flex flex-wrap justify-start h-full md:min-h-[80%] w-full p-[0.1rem] px-auto overflow-y-scroll border rounded-md">
                  {entrySelected?.files.map((file) => (
                    <div
                      className="relative md:h-[10rem] md:w-[10rem] h-40 w-40 md:m-3 rounded-md overflow-hidden border-2 border-black shadow-2xl shadow-zinc-800/60"
                      key={file.id}
                    >
                      <div className="absolute w-full h-full bg-gray-800/30 hover:bg-gray-100/10 z-10"></div>
                      <img className="absolute object-cover" src={file.url} alt={entrySelected.artist.first_name} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-full mt-4">
                {/* {entrySelected?.description} */}
                <p>
                  <LoremIpsum p={1} />
                </p>
              </div>
            </section>
            {/* -------------- CONTACT -------------- */}
            <section
              className={
                showInfo === "contact"
                  // ? `contact_section bg-gray-800/40 flex flex-col justify-between p-4 min-h-[90%] w-[100%] text-2xl font-sans`
                  ? `contact_section bg-gray-800/40 container flex flex-col justify-between min-h-[90%] w-[100%] p-4 text-2xl font-sans`
                  : `hidden`
              }
            >
              <h1 className="flex w-full m-4 font-monoton text-[200%]">
                Contact
              </h1>
              <div className="container flex flex-col justify-evenly md:space-y-5 w-full h-80 md:min-h-[60%]">
                <LoremIpsum p={1} />
              </div>
            </section>
            {/* -------------- SHARE -------------- */}
            <section
              className={
                showInfo === "share"
                  ? `share_section bg-gray-800/40 flex flex-col justify-between p-4 min-h-[90%] w-[100%] text-2xl font-sans`
                  : `hidden`
              }
            >
              <h1 className="flex w-full m-4 font-monoton text-[200%]">
                Share
              </h1>
              <div className="container flex flex-col justify-evenly md:space-y-5 w-full h-80 md:min-h-[60%]">
                <LoremIpsum p={1} />
              </div>
            </section>
            {/* -------------- SHOP -------------- */}
            <section
              className={
                showInfo === "shop"
                  ? `shop_section bg-gray-800/40 flex flex-col justify-between p-4 min-h-[90%] w-[100%] text-2xl font-sans`
                  : `hidden`
              }
            >
              <h1 className="flex w-full m-4 font-monoton text-[200%]">Shop</h1>
              <div className="container flex flex-col justify-evenly md:space-y-5 w-full h-80 md:min-h-[60%]">
                <LoremIpsum p={1} />
              </div>
            </section>

            {/* -------------- ICONS -------------- */}
            <section className="bg-gray-900/60 flex flex-col justify-end w-full mb-0 h-[10%] bg-red ">
              <div className="interact-icons static flex w-full h-full justify-evenly p-2 text-sand bg-black border rounded-md">
                <div
                  onClick={() => handleDisplaySections("about")}
                  className="relative hover:shadow-lg hover:shadow-fuchsia-500/60"
                >
                  <AiFillRead
                    size={30}
                    className={
                      showInfo === "about"
                        ? "bg-gray-900/70 h-full w-auto p-2 rounded-md border-2 border-[#bc7d2fa1] text-[#bc7d2fa1] hover:text-sand hover:bg-gray-800/70 border-violet-700"
                        : "bg-gray-900/70 h-full w-auto p-2 rounded-md border-2 border-[#bc7d2fa1] text-[#bc7d2fa1] hover:text-sand hover:bg-gray-800/70 hover:border-violet-700"
                    }
                  />
                </div>
                <div
                  onClick={() => handleDisplaySections("contact")}
                  className="relative hover:shadow-lg hover:shadow-fuchsia-500/60"
                >
                  <AiFillPhone
                    size={30}
                    className={
                      showInfo === "contact"
                        ? "bg-gray-900/70 h-full w-auto p-2 rounded-md border-2 border-[#bc7d2fa1] text-[#bc7d2fa1] hover:text-sand hover:bg-gray-800/70 border-violet-700"
                        : "bg-gray-900/70 h-full w-auto p-2 rounded-md border-2 border-[#bc7d2fa1] text-[#bc7d2fa1] hover:text-sand hover:bg-gray-800/70 hover:border-violet-700"
                    }
                  />
                </div>
                <div
                  onClick={() => handleDisplaySections("share")}
                  className="relative hover:shadow-lg hover:shadow-fuchsia-500/60"
                >
                  <BsFillShareFill
                    size={30}
                    className={
                      showInfo === "share"
                        ? "bg-gray-900/70 h-full w-auto p-2 rounded-md border-2 border-[#bc7d2fa1] text-[#bc7d2fa1] hover:text-sand hover:bg-gray-800/70 border-violet-700"
                        : "bg-gray-900/70 h-full w-auto p-2 rounded-md border-2 border-[#bc7d2fa1] text-[#bc7d2fa1] hover:text-sand hover:bg-gray-800/70 hover:border-violet-700"
                    }
                  />
                </div>
                <div
                  onClick={() => handleDisplaySections("shop")}
                  className="relative hover:shadow-lg hover:shadow-fuchsia-500/60"
                >
                  <AiFillShopping
                    size={30}
                    className={
                      showInfo === "shop"
                        ? "bg-gray-900/70 h-full w-auto p-2 rounded-md border-2 border-[#bc7d2fa1] text-[#bc7d2fa1] hover:text-sand hover:bg-gray-800/70 border-violet-700"
                        : "bg-gray-900/70 h-full w-auto p-2 rounded-md border-2 border-[#bc7d2fa1] text-[#bc7d2fa1] hover:text-sand hover:bg-gray-800/70 hover:border-violet-700"
                    }
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistDetail;
