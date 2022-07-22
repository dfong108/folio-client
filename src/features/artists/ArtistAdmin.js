import React, { useState, useEffect, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useSelector, useDispatch } from "react-redux";
import { allArtists, artistTypes } from "./artistSlice";
import EditGallery from "./EditGallery";

import { FaUserCircle } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { SiRedhat } from "react-icons/si";
import { BsFillPaletteFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";


const nullForm = {
  isArtist: null,
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  artist_type: "",
  alias: "",
  about: "",
  gallery: {
    title: "",
    description: "",
    entries: [{ name: "", files: [], description: "", entry_id: nanoid() }],
  },
};

const ArtistAdmin = () => {
  const artist = useSelector(allArtists)[0];
  const types = useSelector(artistTypes);
  const [artistData, setArtistData] = useState(artist);
  const [showSection, setShowSection] = useState("Main Info");

  useEffect(() => {
    console.log(artistData);
  }, [artistData])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (value === null) {
      setArtistData({ ...artistData, [name]: artistData[name] });
      return
    }

    if(name.split('.')[0] === 'gallery') {
      let target = name.split('.')[1]
      let tempGallery = artistData.gallery
      tempGallery = {...tempGallery, [target]: value}
      setArtistData({...artistData, gallery : tempGallery})
      console.log(artistData)
      return
    }

    setArtistData({ ...artistData, [name]: value });
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-4 min-h-screen mx-auto w-[98vw] h-full justify-center text-center">
      {/* --------- SIDEBAR -------- */}
      <div className="container flex flex-col w-full md:h-full md:col-start-1 md:col-end-3 md:row-span-full p-1 justify-center text-center border-2 rounded-md bg-black">
        <h3 className="mt-1 text-4xl tracking-widest">Settings</h3>
        <aside className="flex md:flex-col h-full">
          {/* --- Messages --- */}
          <div
            onClick={() => setShowSection("Messages")}
            className={
              showSection === "Messages"
                ? "cursor-pointer w-full h-full flex justify-center items-center border-2 border-iconHL text-iconHL rounded"
                : "cursor-pointer w-full h-full flex justify-center items-center hover:bg-gray-800/80 hover:border-iconHL hover:text-iconHL rounded"
            }
          >
            <BsFillChatLeftTextFill size={40} />
          </div>
          {/* --- Main Info --- */}
          <div
            onClick={() => setShowSection("Main Info")}
            className={
              showSection === "Main Info"
                ? "cursor-pointer w-full h-full flex justify-center items-center border-2 border-iconHL text-iconHL rounded"
                : "cursor-pointer w-full h-full flex justify-center items-center hover:bg-gray-800/80 hover:border-iconHL hover:text-iconHL rounded"
            }
          >
            <FaUserCircle size={40} />
          </div>
          {/* --- Artist Info --- */}
          <div
            onClick={() => setShowSection("Artist Info")}
            className={
              showSection === "Artist Info"
                ? "cursor-pointer w-full h-full flex justify-center items-center border-2 border-iconHL text-iconHL rounded"
                : "cursor-pointer w-full h-full flex justify-center items-center hover:bg-gray-800/80 hover:border-iconHL hover:text-iconHL rounded"
            }
          >
            <SiRedhat size={40} />
          </div>
          {/* --- Manage Gallery --- */}
          <div
            onClick={() => setShowSection("Manage Gallery")}
            className={
              showSection === "Manage Gallery"
                ? "cursor-pointer curs w-full h-full flex justify-center items-center border-2 border-iconHL text-iconHL rounded"
                : "cursor-pointer w-full h-full flex justify-center items-center hover:bg-gray-800/80 hover:border-iconHL hover:text-iconHL rounded"
            }
          >
            <BsFillPaletteFill size={40} />
          </div>
          {/* --- Manage Shop --- */}
          <div
            onClick={() => setShowSection("Manage Shop")}
            className={
              showSection === "Manage Shop"
                ? "cursor-pointer w-full h-full flex justify-center items-center border-2 border-iconHL text-iconHL rounded"
                : "cursor-pointer w-full h-full flex justify-center items-center hover:bg-gray-800/80 hover:border-iconHL hover:text-iconHL rounded"
            }
          >
            <AiFillShopping size={40} />
          </div>
        </aside>
      </div>

      {/* ------------------ MAIN SECTION ----------------- */}
      <form className="flex flex-col container justify-center items-center space-y-3 p-2 md:col-start-3 md:col-span-full md:row-span-full border-2 rounded-md bg-zinc-700">
        {/* --------- MESSAGES -------- */}
        <section
          className={
            showSection === "Messages"
              ? "bg-gray-500/40 container flex flex-col w-full justify-start items-center p-6 min-h-[100%] border rounded"
              : "hidden"
          }
        >
          <h1 className="form_section_title">{showSection}</h1>
        </section>
        {/* --------- MAIN INFO -------- */}
        <section
          className={
            showSection === "Main Info"
              ? "bg-gray-500/40 container flex flex-col w-full justify-start items-center p-6 min-h-[100%] border rounded"
              : "hidden"
          }
        >
          <h1 className="form_section_title">{showSection}</h1>
          {/* --- First / Last Name --- */}
          <div className="w-full bg-gray-500/20 text-3xl mt-20 text-black rounded-xl">
            <label
              className="flex justify-between p-2 mx-20"
              htmlFor="artistData.first_name"
            >
              First Name:
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={artistData.first_name}
                className="form_input_half"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label
              className="flex justify-between p-2 mx-20"
              htmlFor="artistData.last"
            >
              Last Name:
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={artistData.last_name}
                className="form_input_half"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>

          {/* --- Email / Password --- */}
          <div className="w-full bg-gray-500/20 text-3xl text-black">
            <label
              className="flex justify-between p-2 mx-20"
              htmlFor="artistData.email"
            >
              email:
              <input
                type="email"
                id="email"
                name="email"
                value={artistData.email}
                className="form_input_half"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label
              className="flex justify-between p-2 mx-20"
              htmlFor="artistData.password"
            >
              Password:
              <input
                type="password"
                id="password"
                name="password"
                value={artistData.password}
                className="form_input_half"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>
        </section>
        {/* --------- ARTIST INFO -------- */}
        <section
          className={
            showSection === "Artist Info"
              ? "bg-gray-500/40 container flex flex-col w-full min-h-[100%] border rounded"
              : "hidden"
          }
        >
          <h1 className="form_section_title">{showSection}</h1>
          {/* --- Artist Type --- */}
          <label
            htmlFor="artistData.artist_type"
            className="flex justify-between p-2 mx-20"
          >
            <div className="w-full bg-gray-500/20 text-3xl mt-4 text-black rounded-xl">
              <span className="text-[2rem]">What type of artist art you?</span>
              <select
                name="artist_type"
                value={artistData.artist_type}
                id="artist_type"
                onChange={(e) => handleInputChange(e)}
                className="form_input_half "
              >
                <option defaultChecked value={null}>
                  Select One
                </option>
                {types?.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </label>
          {/* --- Artist Alias --- */}
          <label
            htmlFor="artistData.artist_type"
            className="flex justify-between p-2 mx-20"
          >
            <div className="w-full bg-gray-500/20 text-3xl mt-4 text-black rounded-xl">
              <span className="text-[2rem]">What type of artist art you?</span>
              Do you have an alias?
              <input
                type="text"
                id="artistData.alias"
                name="alias"
                placeholder="Artist alias"
                value={artistData.alias}
                className="form_input_half"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </label>
          {/* --- Artist About --- */}
          <label
            htmlFor="artistData.about"
            className="flex justify-between p-2 mx-20 min-h-[40%]"
          >
            <div className="flex flex-col justify-center items-center w-full h-full bg-gray-500/20 text-3xl mt-4 text-black rounded-xl">
              <span className="text-[2rem]">Tell us about you as artist.</span>
              <textarea
                type="text"
                id="artistData.about"
                name="about"
                placeholder="Artist about"
                value={artistData.about}
                className="form_input_half min-h-[10rem] w-[80%]"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </label>

        </section>
        {/* --------- MANAGE GALLERY -------- */}
        <section
          className={
            showSection === "Manage Gallery"
              ? "bg-gray-500/40 container flex flex-col w-full items-center min-h-[100%] border rounded"
              : "hidden"
          }
        >
          <h1 className="form_section_title">{showSection}</h1>

          <div className="flex flex-col px-10 text- w-[95%] h-[80%] bg-gray-500/40 border rounded">
            <EditGallery artistData={artistData} setArtistData={setArtistData} handleInputChange={handleInputChange} />
          </div>


        </section>
        {/* --------- MANAGE SHOP -------- */}
        <section
          className={
            showSection === "Manage Shop"
              ? "bg-gray-500/40 container flex flex-col w-full min-h-[100%] border rounded"
              : "hidden"
          }
        >
          <h1 className="form_section_title">{showSection}</h1>
        </section>
      </form>
    </div>
  );
};

export default ArtistAdmin;
