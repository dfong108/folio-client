import React, { useCallback, useState, useEffect } from "react";
import { useFormik } from "formik";
import { Image } from "cloudinary-react";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

import { AiOutlineClose } from "react-icons/ai";

const galleryShape = [ { title: "", files: [], description: "", entry_id: "" } ];


const EditGallery = ({ artistData, currentPage, setArtistData, handleInputChange }) => {

  const [message, setMessage] = useState("")
  const [galleryEntries, setGalleryEntries] = useState(galleryShape);
  const [filesLoaded, setFilesLoaded] = useState(false);
  var { gallery } = artistData
  var { entries } = artistData.gallery;

  
  useEffect((entries) => {
    updateEntries();
  }, [galleryEntries])

  function updateEntries () {
    entries = galleryEntries
    console.log(entries)
    console.log(galleryEntries)
  }

  const handleEntryFields = (event, id) => {
    event.preventDefault();
    const { name, value } = event.target;

    let newGal = galleryEntries
    let targetEntry = newGal.filter(entry => entry.entry_id === id)[0];
    const targetIndex = galleryEntries.indexOf(targetEntry)
    
    targetEntry = {...targetEntry, [name]: value}

    newGal.splice(targetIndex, 1, targetEntry)
    setGalleryEntries(newGal)

    setMessage('--- FIELD UPDATE ---')
    console.log(message)
    console.log(galleryEntries)
    console.log(entries)
  };

  const handleAddEntry = () => {
    const newEntry = { name: "", files: [], description: "", entry_id: nanoid()};
    setGalleryEntries((state) => [...state, newEntry]);

    setMessage('--- ENTRY ADDED ---')
    console.log(message)
    console.log(galleryEntries)
  };

  const handleRemoveEntry = (id) => {
    setGalleryEntries((state) => state.filter(entry => entry.entry_id != id));
    let tempEntries = galleryEntries
    let tempGallery = {...gallery, entries: tempEntries}
    setArtistData({...artistData, gallery: tempGallery})
    setMessage('--- ENTRY REMOVED ---')
    console.log(message)
    console.log(galleryEntries);
    console.log(entries);
  };

  const handleAddFiles = useCallback((event, entry) => {
    const cloudinary_url = process.env.REACT_APP_CLOUDINARY_URL;
    const upload_preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
    const { files } = event.target;
    const filesArray = Array.from(files);

    filesArray.forEach( async (file) => {
      // console.log(file)
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", upload_preset);

      const response = await axios
        .post(cloudinary_url, formData)
        .then((res) => {
          const { url, public_id } = res.data;
          const newFileObj = { "url": url, "public_id": public_id };

          let newGal = galleryEntries
          let targetEntry = newGal.filter(x => x.entry_id === entry.entry_id)[0]
          let targetIndex = newGal.indexOf(targetEntry)

          targetEntry.files.push(newFileObj)
          newGal.splice(targetIndex, 1, targetEntry)
        
          setGalleryEntries(newGal);
          
          console.log('---- FILE ADDED ---')
          console.log(entry.files);
          console.log(galleryEntries)
        });
        setFilesLoaded((prev) => !prev)
    });
  }, [galleryEntries]);

  const handleRemoveFile = (entry, file_id) => {
    const newFiles = entry.files.filter(file => file.public_id != file_id)
    let newGal =  galleryEntries;

    const newEntry = {...entry, files: newFiles}
    const newEntryIndex = newGal.indexOf(entry)
    newGal.splice(newEntryIndex, 1, newEntry)
    setGalleryEntries(() => newGal)

    setMessage('--- FILE REMOVED ---')
    console.log(message)
    console.log(galleryEntries)
    console.log(entries)
  }


  return (
    <form>
{/* ------ GALLERY TITLE & DESCRIPTION ------ */}
      <div className="flex py-4 text-black">
        <div className="flex flex-col min-w-[90%]">
            {/* --- Gallery Title --- */}
            <label
            htmlFor="gallery.title"
            className="flex md:flex-col w-full space-x-2"
            >
            Gallery Title
            <input
                onChange={(e) => handleInputChange(e)}
                type="text"
                name="gallery.title"
                value={gallery.title}
                placeholder="Add Title"
                className="form_input_half"
            />
            </label>
            {/* --- Gallery Description --- */}
            <label
            htmlFor="gallery.description"
            className="flex md:flex-col w-full space-x-2 mt-2"
            >
            Gallery description
            <textarea
                onChange={(e) => handleInputChange(e)}
                name="gallery.description"
                value={gallery.description}
                placeholder="Gallery description"
                className="form_input_half w-full h-[200%]"
            />
            </label>
        </div>
        {/* ----- "ADD ENTRY" BUTTON ----- */}
        <div className=" flex justify-end w-[20%] h-[30%] top-[-80%]">
            <div
            onClick={() => handleAddEntry()}
            className="block text-center w-full cursor-pointer text-black border-4 border-black rounded-md bg-gray-400 hover:bg-sky-400 "
            >
            Add new entry
            </div>
        </div>
      </div>
{/* ----- ENTRIES ----- */}
      <div className="flex  p-2 text-black space-x-10 overflow-scroll">
        {entries?.map((entry, index) => (
          <div key={entry.entry_id} className="space-y-4 flex flex-col min-w-[100%] max-h-[100%] p-2 border-4 rounded-md bg-cyan-50/20">
      {/* ------ ENTRY NAME ------ */}
            <label htmlFor="title">
              <span>{entry.title}</span>
              <input
                type="text"
                name="name"
                placeholder="name of exhibit"
                className="rounded-md px-1 text-black lowercase h-[80%] w-full flex text-left items-start justify-start"
                onChange={(e) => handleEntryFields(e, entry.entry_id)}
              />
            </label>
      {/* ------ ENTRY DESCRIPTION ------ */}
            <label htmlFor="description">
              <textarea
                name="description"
                placeholder="Exhibit description"
                className="rounded-md px-1 text-black lowercase h-[80%] w-full flex text-left items-start justify-start"
                onChange={(e) => handleEntryFields(e, entry.entry_id)}
              />
            </label>
      {/* ------ ADD FILES ------ */}
            <label htmlFor={`gallery.entries.${index}.files`} className="">
              <input
                type="file"
                multiple
                name={`gallery.entries.${index}.files`}
                accept="image/*, .doc, .pdf"
                onChange={(event) => handleAddFiles(event, entry)}
              />
      {/* ------ PREVIEW / REMOVE FILES ------ */}
              <div className="flex flex-wrap justify-evenly container w-full bg-gray-400/50 rounded-md">
                {entry.files.map((file) => (
                  <div
                    key={file.public_id}
                    className="relative m-1 cursor-pointer "
                  >
                    <div 
                      onClick={() => handleRemoveFile(entry, file.public_id)}
                      className="absolute left-[85%] hover:left-[80%] -top-2 hover:-top-3 text-white z-10 p-1 hover:p-2 font-bold rounded-full border-1 hover:border-black hover:bg-red bg-gray-900/80">
                      <AiOutlineClose size={20} />
                    </div>
                    <div className="w-[8rem] h-[8rem] overflow-hidden border-2 border-black hover:border-white rounded-md">
                      <img
                        className="object-cover"
                        src={file.url}
                        alt={entry.name}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </label>

      {/* ------ REMOVE ENTRY BUTTONS ------ */}
            <div className="inline-flex w-full justify-around">
              {galleryEntries.length > 1 && (
                <div
                  onClick={() => handleRemoveEntry(entry.entry_id)}
                  className="p-1 my-4 cursor-pointer border-4 border-black rounded-2xl bg-gray-400 hover:bg-sky-400"
                >
                  Remove this entry
                </div>
              )}
              {/* <div
                onClick={() => handleAddEntry()}
                className="p-1 my-4 cursor-pointer border-4 border-black rounded-2xl bg-gray-400 hover:bg-sky-400"
              >
                Add new entry
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default EditGallery;
