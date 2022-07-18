import React, { useState } from 'react';
import { Form, Field, useFormik } from 'formik';
import UserType from './artist_create/UserType.js';
import  MainInfo from './artist_create/MainInfo.js';
import  ArtistType from './artist_create/ArtistType.js';
import  CreateGallery from './artist_create/CreateGallery.js';
import ArtistDescription from './artist_create/ArtistDescription.js';

import Banner_2 from '../../../assets/art-banner-2.jpg';


const SignUp = () => {
    
    const [currentPage, setCurrentPage] = useState(0)
    const formik = useFormik({
        initialValues: {
            isArtist: null,
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            artist_type: '',
            alias: '',
            about: '',
            gallery: {title: '', description: '', entries: [ { name: '', files: [], description: '' } ] }
        },
        onSubmit: {},
    });

    const pageTitles = ["User Type", "General Info", "Artist Type", "Artist Bio",  "Make Gallery"]
    // const textFieldStyles = 'rounded-md px-1 text-black lowercase h-[80%] w-full flex text-left items-start justify-start'



  return (

    // <div className='relative flex flex-col container w-full md:w-[70%] md:mx-auto md:translate-y-[20%] text-[1.5rem] md:text-[2rem] rounded-lg border-4 border-sand'>
    <div className='relative flex flex-col container w-full md:w-[70%] md:m-auto top-1 text-[1.5rem] md:text-[2rem] rounded-lg border-4 border-sand'>
        
        <div className='w-full h-full p-8 space-y-10'>
            <h3>{pageTitles[currentPage]}</h3>
            <div className='section-wrapper h-full w-full items-center relative overflow-hidden'>
            {/* -------- SECTION ONE: USER TYPE -------- */}
                <section className={currentPage === 0 ? 'section-one flex flex-wrap h-full w-full justify-center space-y-10 bg-gray-900/80 z-10 p-4 rounded-md border-4 border-black' : 'hidden'}>
                   <UserType values={formik.values} handleChange={formik.handleChange} currentPage={currentPage} />
                </section>

            {/* -------- SECTION TWO: MAIN INFO -------- */}
                <section className={currentPage === 1 ? 'section-two flex flex-col h-full w-full justify-center rounded-md bg-violet-900/30 border-4 border-black p-4' : 'hidden'}>
                    <MainInfo values={formik.values} handleChange={formik.handleChange} currentPage={currentPage} />
                </section>

            {/* -------- SECTION THREE: ARTIST TYPE -------- */}
                <section className={currentPage === 2 ? 'section-three flex flex-col h-full w-full justify-center rounded-md bg-gray-900/80 border-4 border-black p-4' : 'hidden'}>
                    <ArtistType values={formik.values} handleChange={formik.handleChange} currentPage={currentPage} />
                </section>
        
            {/* -------- SECTION FOUR: ARTIST INFO -------- */}
                <section className={currentPage === 3 ? 'section-four flex flex-col h-full w-full justify-center rounded-md bg-violet-900/30 border-4 border-black p-4' : 'hidden'}>
                    <ArtistDescription values={formik.values} handleChange={formik.handleChange} currentPage={currentPage} />
                </section>
            
            {/* -------- SECTION FIVE: CREATE GALLERY -------- */}
                <section className={currentPage === 4 ? 'section-five flex flex-col h-full w-full justify-center rounded-md bg-cyan-700/80 border-4 border-black p-4' : 'hidden'}>
                    <CreateGallery values={formik.values} handleChange={formik.handleChange} currentPage={currentPage} />
                </section>

            </div>

            <footer className='flex justify-center text-center md:space-x-40'>
            {/* --- BACK BUTTON --- */}
                {
                    currentPage > 0 &&
                    <button 
                        type='button' 
                        className='w-40 border-2 border-black text-black  bg-gray-200/90 hover:bg-cyan-300 rounded-md'
                        onClick={() => setCurrentPage((curr) => curr - 1)}
                        disabled={currentPage === 0}
                    >Back</button>
                }
            {/* --- NEXT / SUBMIT BUTTON --- */}
                {
                    currentPage != pageTitles.length-1 ? (
                        <button 
                            type='button' 
                            className='w-40 border-2 border-black text-black  bg-gray-200/90 hover:bg-cyan-300 rounded-md'
                            onClick={() => setCurrentPage((curr) => curr + 1)}
                            disabled={currentPage === pageTitles.length - 1}
                        >Next</button>
                    ) : (
                        <button 
                            type='submit' 
                            className='w-40 border-2 border-black text-black  bg-green-600 hover:bg-green-200 9ounded-md'
                            onClick={formik.handleReset}
                            disabled={currentPage === pageTitles.length - 1}
                        >Submit</button>
                    )
                }
            </footer>
        </div>
        <div className='-z-10 absolute h-full w-full bg-gray-700/70'></div>
        <img src={Banner_2} alt="folio" className='-z-20 absolute h-full w-full object-cover' />
    </div>
  )
}

export default SignUp