import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createArtist } from "../../artists/artistSlice.js";

import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";
// import * as Yup from "yup";
import UserType from "./artist_create/UserType.js";
import MainInfo from "./artist_create/MainInfo.js";
import ArtistType from "./artist_create/ArtistType.js";
import CreateGallery from "./artist_create/CreateGallery.js";
import ArtistDescription from "./artist_create/ArtistDescription.js";

import Banner_2 from "../../../assets/art-banner-2.jpg";

const SignUp = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const formik = useFormik({
    initialValues: {
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
    },
    // validationSchema: Yup.object({
    //   first_name: Yup.string()
    //     .max(15, "Must be 15 characters or less.")
    //     .required("required"),
    //   // ...
    //   gallery: {
    //     title: Yup.string().max(5),
    //   },
    // }),
    onSubmit: (values) => {
      //   e.preventDefault();
      //   console.log("----- SUBMIT!!! ----");
      console.log(values);
        dispatch(createArtist(values));
    },
  });
   console.log(formik.values)
  const pageTitles = [
    "User Type",
    "General Info",
    "Artist Type",
    "Artist Bio",
    "Make Gallery",
  ];

  // const textFieldStyles = 'rounded-md px-1 text-black lowercase h-[80%] w-full flex text-left items-start justify-start'

  return (
    <form
        onSubmit={formik.handleSubmit}
      //   onSubmit={myHandleSubmit}
      className="relative flex flex-col container w-full md:w-[70%] md:m-auto top-1 text-[1.5rem] md:text-[2rem] rounded-lg border-4 border-sand"
    >
      <div className="w-full h-full p-8 space-y-10">
        <h3>{pageTitles[currentPage]}</h3>
        <div className="section-wrapper h-full w-full items-center relative overflow-hidden">
          {/* -------- SECTION ONE: USER TYPE -------- */}
          <section
            className={
              currentPage === 0
                ? "section-one flex flex-wrap h-full w-full justify-center space-y-10 bg-gray-900/80 z-10 p-4 rounded-md border-4 border-black"
                : "hidden"
            }
          >
            <UserType
              values={formik.values}
              formik_errors={formik.errors}
              handleChange={formik.handleChange}
              currentPage={currentPage}
            />
          </section>

          {/* -------- SECTION TWO: MAIN INFO -------- */}
          <section
            className={
              currentPage === 1
                ? "section-two flex flex-col h-full w-full justify-center rounded-md bg-violet-900/30 border-4 border-black p-4"
                : "hidden"
            }
          >
            <MainInfo
              values={formik.values}
              formik_errors={formik.errors}
              handleChange={formik.handleChange}
              currentPage={currentPage}
            />
          </section>

          {/* -------- SECTION THREE: ARTIST TYPE -------- */}
          <section
            className={
              currentPage === 2
                ? "section-three flex flex-col h-full w-full justify-center rounded-md bg-gray-900/80 border-4 border-black p-4"
                : "hidden"
            }
          >
            <ArtistType
              values={formik.values}
              formik_errors={formik.errors}
              handleChange={formik.handleChange}
              currentPage={currentPage}
            />
          </section>

          {/* -------- SECTION FOUR: ARTIST INFO -------- */}
          <section
            className={
              currentPage === 3
                ? "section-four flex flex-col h-full w-full justify-center rounded-md bg-violet-900/30 border-4 border-black p-4"
                : "hidden"
            }
          >
            <ArtistDescription
              values={formik.values}
              formik_errors={formik.errors}
              handleChange={formik.handleChange}
              currentPage={currentPage}
            />
          </section>

          {/* -------- SECTION FIVE: CREATE GALLERY -------- */}
          <section
            className={
              currentPage === 4
                ? "section-five flex flex-col h-full w-full justify-center rounded-md bg-cyan-700/80 border-4 border-black p-4"
                : "hidden"
            }
          >
            <CreateGallery
              values={formik.values}
              formik_errors={formik.errors}
              handleChange={formik.handleChange}
              currentPage={currentPage}
            />
          </section>
        </div>
        {/* --------- NAV / SUBMIT BUTTONS -------- */}
        <footer className="flex justify-center text-center md:space-x-40">
          {/* --- BACK BUTTON --- */}
          {currentPage > 0 && (
            <button
              type="button"
              className="w-40 border-2 border-black text-black  bg-gray-200/90 hover:bg-cyan-300 rounded-md"
              onClick={() => setCurrentPage((curr) => curr - 1)}
              disabled={currentPage === 0}
            >
              Back
            </button>
          )}
          {/* --- NEXT / SUBMIT BUTTON --- */}
          {currentPage !== pageTitles.length - 1 ? (
            <button
              type="button"
              className="w-40 border-2 border-black text-black  bg-gray-200/90 hover:bg-cyan-300 rounded-md"
              onClick={() => setCurrentPage((curr) => curr + 1)}
              disabled={currentPage === pageTitles.length - 1}
            >
              Next
            </button>
          ) : (
            // <h1>hi</h1>
            <div
              //   type="submit"
              onClick={formik.handleSubmit}
              className={
                currentPage === pageTitles.length - 1
                  ? "w-40 border-2 border-black text-black  bg-green-600/75 hover:bg-green-200 cursor-pointer rounded-md"
                  : "hidden"
              }
              //   disabled={true}
            >
              Submit
            </div>
          )}
        </footer>
      </div>
      <div className="-z-10 absolute h-full w-full bg-gray-900/70"></div>
      <img
        src={Banner_2}
        alt="folio"
        className="-z-20 absolute h-full w-full object-cover"
      />
    </form>
  );
};

export default SignUp;
