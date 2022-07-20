import React, { useCallback, useState, useEffect } from "react";
import { useFormik } from "formik";
import { Image } from "cloudinary-react";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

import { AiOutlineClose } from "react-icons/ai";

const galleryShape = [ { name: "", files: [], description: "", entry_id: nanoid() } ];


const CreateGallery = ({ values, currentPage, handleChange }) => {
  const [message, setMessage] = useState("")
  const [galleryEntries, setGalleryEntries] = useState(galleryShape);
  const [filesLoaded, setFilesLoaded] = useState(false);
  var { entries } = values.gallery;

  
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

    setMessage('--- ENTRY REMOVED ---')
    console.log(message)
    console.log(galleryEntries);
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
      <div className="py-4 text-black">
        <label
          htmlFor="gallery.title"
          className="flex md:flex-col w-full space-x-2"
        >
          Gallery Title
          <input
            onChange={handleChange}
            type="text"
            name="gallery.title"
            placeholder="Add Title"
            className="rounded-md px-1 text-black lowercase h-[80%] w-full flex text-left items-start justify-start"
          />
        </label>

        <label
          htmlFor="gallery.description"
          className="flex md:flex-col w-full space-x-2 mt-2"
        >
          Gallery description
          <textarea
            onChange={handleChange}
            name="gallery.description"
            placeholder="Gallery description"
            className="rounded-md px-1 text-black lowercase h-[80%] w-full flex text-left items-start justify-start"
          />
        </label>
      </div>

      <div className=" flex w-full justify-end">
        <div
          onClick={() => handleAddEntry()}
          className="flex flex-wrap text-center p-1 my-4 w-[12rem] cursor-pointer text-black border-4 border-black rounded-2xl bg-gray-400 hover:bg-sky-400"
        >
          Add new entry
        </div>

      </div>

{/* ----- Entries ----- */}
      <div className="flex flex-col-reverse p-2 mt-4 text-black space-y-10">
        {galleryEntries?.map((entry, index) => (
          <div key={entry.entry_id} className="space-y-4 flex flex-col p-2 border-4 rounded-md bg-cyan-50/20">
      {/* ------ ENTRY NAME ------ */}
            <label htmlFor="name">
              <span>Exhibit {index + 1}</span>
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

export default CreateGallery;
