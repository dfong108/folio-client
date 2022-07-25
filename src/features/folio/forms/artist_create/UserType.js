import React from "react";
import { useFormik } from "formik";
import { nanoid } from "@reduxjs/toolkit";

const UserType = ({ values, formik_errors, currentPage, handleChange }) => {
  const [artist, setArtist] = React.useState(null);
  
  // console.log(formik_errors)

  return (
    <div className="flex flex-col space-y-4">
      <h2>Please select the one option that best describes you.</h2>
      <div className="flex space-x-4">

        <div
          onClick={() => setArtist(true)}
          className={
            artist
              ? "flex flex-col w-[50%] cursor-pointer rounded border-[0.25rem] border-orange text-gray-900/70 bg-teal-200/80 hover:bg-teal-100/90 "
              : "flex flex-col w-[50%] cursor-pointer rounded border-[0.25rem] border-white text-gray-900/70 bg-teal-200/80 hover:bg-teal-100/90 "
          }
        >
          <label className="flex flex-col items-center w-full h-full p-4 cursor-pointer">
            <input
              onChange={handleChange}
              id="regular_user"
              type="radio"
              name="isArtist"
              value={true}
            />
            I'm an artist looking to create a great portfolio for the public to
            enjoy.
          </label>
        </div>

         <div
          onClick={() => setArtist(false)}
          className={
            artist === false
              ? "flex flex-col w-[50%] cursor-pointer rounded border-[0.25rem] border-orange text-gray-900/70 bg-teal-200/80 hover:bg-teal-100/90 "
              : "flex flex-col w-[50%] cursor-pointer rounded border-[0.25rem] border-white text-gray-900/70 bg-teal-200/80 hover:bg-teal-100/90 "
          }
        >
          <label className="flex flex-col items-center w-full h-full  p-4 cursor-pointer">
            <input
              onChange={handleChange}
              id="artist_user"
              type="radio"
              name="isArtist"
              value={false}
            />
            I love art and want to explor new talents
          </label>
        </div>

      </div>
    </div>
  );
};

export default UserType;
