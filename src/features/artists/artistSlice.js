import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// ------------------------------------ SEEDS VVVVVV ------------------------------------

// ------------------------------------ SEEDS VVVVVV ------------------------------------

const sampleArtists = [
    // -------------- VISUAL --------------
    {name: 'Vincent van Gogh', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Leonardo da Vinci', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Jackson Pollock', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Andy Warhol', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Jean-Michel Basquiat', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Vincent van Gogh', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Leonardo da Vinci', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Jackson Pollock', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Andy Warhol', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Jean-Michel Basquiat', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    
    {name: 'Vincent van Gogh', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Leonardo da Vinci', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Jackson Pollock', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Andy Warhol', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Jean-Michel Basquiat', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Vincent van Gogh', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Leonardo da Vinci', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Jackson Pollock', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Andy Warhol', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Jean-Michel Basquiat', date_created: new Date(), artist_type: 'visual', gallery: {title: '', entries: []}, id: nanoid()},
    // -------------- MUSICIAN --------------
    {name: 'Stevie Wonder', date_created: new Date(), artist_type: 'musician', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Prince', date_created: new Date(), artist_type: 'musician', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Beyonce', date_created: new Date(), artist_type: 'musician', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Shakira', date_created: new Date(), artist_type: 'musician', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Michael Jackson', date_created: new Date(), artist_type: 'musician', gallery: {title: '', entries: []}, id: nanoid()},
    // -------------- PERFORMER --------------
    {name: 'Dave Chappelle', date_created: new Date(), artist_type: 'performer', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Kevin Hart', date_created: new Date(), artist_type: 'performer', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Denzel Washington', date_created: new Date(), artist_type: 'performer', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Meryl Streep', date_created: new Date(), artist_type: 'performer', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Viola Davis', date_created: new Date(), artist_type: 'performer', gallery: {title: '', entries: []}, id: nanoid()},
    // -------------- WRITER --------------
    {name: 'Stephen King', date_created: new Date(), artist_type: 'writer', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Enest Hemingway', date_created: new Date(), artist_type: 'writer', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Mark Twain', date_created: new Date(), artist_type: 'writer', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'J. K. Rowling', date_created: new Date(), artist_type: 'writer', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Emily Dickinson', date_created: new Date(), artist_type: 'writer', gallery: {title: '', entries: []}, id: nanoid()},
    // -------------- CULINARY --------------
    {name: 'Gordon Ramsay', date_created: new Date(), artist_type: 'culinary', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Anthony Bourdain', date_created: new Date(), artist_type: 'culinary', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Rachel Ray', date_created: new Date(), artist_type: 'culinary', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Cat Cora', date_created: new Date(), artist_type: 'culinary', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Julia Child', date_created: new Date(), artist_type: 'culinary', gallery: {title: '', entries: []}, id: nanoid()},
    {name: 'Julia Child', date_created: new Date(), artist_type: 'rastarou', gallery: {title: '', entries: []}, id: nanoid()},
]

// --------------------------------------- FILL GALLERY ---------------------------------
// --------------------------------------- FILL GALLERY ---------------------------------


const artist_Seeds = sampleArtists.map(artist => {
    for(let i = 0; i <= 10; i++) {
        let random = () => Math.floor(Math.random() * 10)
        let image = `https://source.unsplash.com/random/24${random()}x24${random()}`
        artist.gallery.entries.push(image)
    }
    return artist
})

function getGalleries() {
    let galleries = [];
    sampleArtists.forEach((artist) => {
        let gallery = artist.gallery
        let newObj = {'gallery': gallery, "artist": artist}
        galleries.push(newObj)
    })
    return galleries
}

// --------------------------------------- SORT BY TYPE ---------------------------------
// --------------------------------------- SORT BY TYPE ---------------------------------

function getTypes() {
    let typesArray = []
    sampleArtists.forEach(artist => {
    if (!typesArray.includes(artist.artist_type)) {
        typesArray.push(artist.artist_type)
    }
    })
    return typesArray
}

function sortedArtists() {
    let types = getTypes()
    let sortedByType = []
    types?.forEach((type, i) => {
      let temp = sampleArtists.filter(artist => artist.artist_type === type)
      sortedByType.push({'artist_type': type, 'artists': temp})
    })
    return sortedByType
}

function sortedGalleries() {
    let types = getTypes();
    let galleries = []
    types.forEach((type, i) => {
        let sortedGalleries = [];
        let temp = sampleArtists.filter(artist => artist.artist_type === type)
        temp.forEach((entry, i) => {
            // galleries.push({'type': type, 'gallery': entry.gallery})
            sortedGalleries.push({'artist': entry, 'gallery': entry.gallery})
        })
        galleries.push({'type': type, 'galleries': sortedGalleries})
    })
    return galleries
}
// ------------------------------------ SEEDS ^^^^^^ ------------------------------------
// ------------------------------------ SEEDS ^^^^^^ ------------------------------------


const BASE_URL = 'http://localhost:8000/artists'

const initialState = {
    // artists: [],
    artists: artist_Seeds,
    sortedArtists: sortedArtists(),
    artistTypes: getTypes(),
    galleries: getGalleries(),
    sortedGalleries: sortedGalleries(),
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
        const response = await axios.delete(DELETE_URL, artist)
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
export const artistsByType = (state) => state.artist.sortedArtists;
export const artistTypes = (state) => state.artist.artistTypes;


export const allGalleries = (state) => state.artist.galleries;
export const galleriesByType = (state) => state.artist.sortedGalleries;

export const getArtistStatus = (state) => state.artist.loading;


export default artistSlice.reducer;