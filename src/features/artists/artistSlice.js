import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import artist_seeds from '../seeds/artistSeeds';

const BASE_URL = 'http://localhost:8000/artists'

const initialState = {
    artists: [],
    artistTypes: [],
    galleries: [],
    loading: false,
    error: null
}

// ------------------------------------ CREATE ------------------------------------
// ------------------------------------ CREATE ------------------------------------
export const createArtist = createAsyncThunk('artist/createArtist', async (newArtist) => {
    try {
        const response = await axios.post(`${BASE_URL}/create`, newArtist)
        console.log('---------- CREATE THUNK ----------')
        return response
    } catch (error) {
        return(error.message)
    }
})


// ------------------------------------ GET ------------------------------------
// ------------------------------------ GET ------------------------------------
export const getArtists = createAsyncThunk('artist/getArtists', async () => {
    try {
        const response = await axios.get(BASE_URL)
        console.log('---------- GET THUNK ----------')
        return response
    } catch (error) {
        return(error.message)
    }
})


// ------------------------------------ UPDATE ------------------------------------
// ------------------------------------ UPDATE ------------------------------------
export const updateArtist = createAsyncThunk('artist/updateArtist', async (artist) => {
    const{id} = artist;
    const UPDATE_URL = `${BASE_URL}/${id}`;
    
    try {
        const response = await axios.put(UPDATE_URL, artist)
        console.log('---------- UPDATE THUNK ----------')
        return response
    } catch (error) {
        return(error.message)
    }
})


// ------------------------------------ DELETE ------------------------------------
// ------------------------------------ DELETE ------------------------------------
export const deleteArtist = createAsyncThunk('artist/deleteArtist', async (artist) => {
    const {id} = artist;
    const DELETE_URL = `${BASE_URL}/${id}`;

    try {
        const response = await axios.delete(UPDATE_URL, artist)
        console.log('---------- DELETE THUNK ----------')
        return response
    } catch (error) {
        return(error.message)
    }
})



// ------------------------------------ SLICE ------------------------------------
// ------------------------------------ SLICE ------------------------------------


export const artistSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {
        filterArtistsByType: (state, action) => {

        },
        filterGalleriesByType: (state, action) => {

        },
        filterGalleriesByArtist: (state, action) => {

        },
    },
    extraReducers(builder) {
        builder
        // ------- GET ----------------------------------
            .addCase(getArtists.pending, (state, action) => {
                
            })
            .addCase(getArtists.fulfilled, (state, action) => {

            })
            .addCase(getArtists.rejected, (state, action) => {

            })
        // ------- CREATE ----------------------------------
            .addCase(createArtist.fulfilled, (state, action) => {

            })
        // ------- UPDATE ----------------------------------
            .addCase(updateArtist.fulfilled, (state, action) => {

            })
        // ------- DELETE ----------------------------------
            .addCase(deleteArtist.fulfilled, (state, action) => {

            })
    }
})

export const allArtists = (state) => state.artist.artists;
export const allGalleries = (state) => state.artist.galleries;
export const artistTypes = (state) => state.artist.artistTypes;

export const getArtistStatus = state.artist.loading;


export default artistSlice.reducer;