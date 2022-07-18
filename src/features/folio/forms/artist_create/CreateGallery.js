import React, { useCallback, useState } from "react";
import { useFormik } from "formik";
import ImageUploading from "react-images-uploading"
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const CreateGallery = ({ values, currentPage, handleChange }) => {
  const [currentEntry, setCurrentEntry] = useState(0);
  const [entryImages, setEntryImages] = useState();
  const { gallery } = values;
  const { entries } = values.gallery;
  console.log(entries)


  const handleAddEntry = (index) => {
    entries.push({name: '', files: [], description: ''})
    setCurrentEntry(index)
    console.log(entries)
  }
  const handleRemoveEntry = (index) => {
    entries.splice(index, 1)
    setCurrentEntry(entries.length - 1)
    console.log(entries)
  }
  const handleAddFiles = useCallback((event, index) => {
    const cloudinary_url = process.env.REACT_APP_CLOUDINARY_URL;
    // const cloudinary_url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`;
    // const cloudinary_url = `https://api.cloudinary.com/v1_1/morpheus108310718/upload`;

    const cloudinary_api_key = process.env.REACT_APP_API_KEY;
    const upload_preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

    const { value } = event.target;
    // entries[index].files.push(value);
    // const files = entries[index].files

    console.log(value);
    // console.log(entries[index])
    
    // files.forEach( async (file) => {
    //   const formData = new FormData();
    //   formData.append("file", file);
    //   // formData.append("upload_preset", upload_preset)
    //   formData.append("upload_preset", "ijmbfgz9")
    //   // formData.append("api_key", cloudinary_api_key)

    //   const response = await fetch(cloudinary_url, {
    //     method: "post",
    //     body: formData
    //   })

    //   const data = await response.json();
    //   console.log(data)
    // })



  }, []);
  

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

      {/* ----- Entries ----- */}

      <div className="flex flex-col-reverse p-2 mt-4 border-4 rounded-md text-black">

        {values.gallery.entries.map((entry, index) => (
          <div key={index}>
            <hr/>
            <label htmlFor={`gallery.entries.${index}.name`}>
              <span>Exhibit {index + 1}</span>
              <input
                type="text"
                name={`gallery.entries.${index}.name`}
                placeholder="name of exhibit"
                className="rounded-md px-1 text-black lowercase h-[80%] w-full flex text-left items-start justify-start"
                onChange={handleChange}
              />
            </label>

            <label htmlFor={`gallery.entries.${index}.description`}>
              <textarea
                name={`gallery.entries.${index}.description`}
                placeholder="Exhibit description"
                className="rounded-md px-1 text-black lowercase h-[80%] w-full flex text-left items-start justify-start"
                onChange={handleChange}
              />
            </label>

            <label htmlFor={`gallery.entries.${index}.files`} className="">
              Import files here
              <input
                type="file" multiple
                name={`gallery.entries.${index}.files`}
                accept="image/*,.doc,.pdf"
                onChange={(e) => handleAddFiles(e, index)}
                // onChange={handleChange}
              />
              <ul>
                {entry.files.map((file, i) => (
                  <li key={i}>{file}</li>
                ))}
              </ul>
            </label>
     
            <div className="inline-flex w-full justify-around">
              {values.gallery.entries.length > 1 && (
                <div
                  onClick={() => handleRemoveEntry(index)}
                  className="p-1 my-4 cursor-pointer border-4 border-black rounded-2xl bg-gray-400 hover:bg-sky-400"
                >Remove this entry</div>
              )}
              <div
                onClick={handleAddEntry}
                className="p-1 my-4 cursor-pointer border-4 border-black rounded-2xl bg-gray-400 hover:bg-sky-400"
              >Add new entry</div>
            </div>

          </div>
        ))}
        
      </div>
    </form>
  );
};

export default CreateGallery;
