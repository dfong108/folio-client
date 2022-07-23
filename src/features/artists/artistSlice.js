import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { AiTwotoneStar } from 'react-icons/ai';

// ------------------------------------ SEEDS VVVVVV ------------------------------------

// ------------------------------------ SEEDS VVVVVV ------------------------------------

const sampleArtists = [
    // -------------- VISUAL --------------
    {first_name: 'Vincent van', last_name: 'Gogh', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Leonardo da', last_name: 'Vinci', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Jackson', last_name: 'Pollock', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Andy', last_name: 'Warhol', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Jean-Michel', last_name: 'Basquiat', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Vincent van', last_name: 'Gogh', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Leonardo da', last_name: 'Vinci', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Jackson', last_name: 'Pollock', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Andy', last_name: 'Warhol', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Jean-Michel', last_name: 'Basquiat', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    
    {first_name: 'Vincent van', last_name: 'Gogh', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Leonardo da', last_name: 'Vinci', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Jackson', last_name: 'Pollock', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Andy', last_name: 'Warhol', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Jean-Michel', last_name: 'Basquiat', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Vincent van', last_name: 'Gogh', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Leonardo da', last_name: 'Vinci', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Jackson', last_name: 'Pollock', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Andy', last_name: 'Warhol', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Jean-Michel', last_name: 'Basquiat', alias: "", password: "", email: "", about: "", artist_type: 'visual', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    // -------------- MUSICIAN --------------
    {first_name: 'Stevie', last_name: 'Wonder', alias: "", password: "", email: "", about: "", artist_type: 'musician', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Prince',  last_name: "", alias: "", password: "", email: "", about: "", artist_type: 'musician', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Beyonce', last_name: "", alias: "", password: "", email: "", about: "", artist_type: 'musician', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Shakira', last_name: "", alias: "", password: "", email: "", about: "", artist_type: 'musician', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Michael', last_name: 'Jackson', alias: "", password: "", email: "", about: "", artist_type: 'musician', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    // -------------- PERFORMER --------------
    {first_name: 'Dave', last_name: 'Chappelle', alias: "", password: "", email: "", about: "", artist_type: 'performer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Kevin', last_name: 'Hart', alias: "", password: "", email: "", about: "", artist_type: 'performer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Denzel', last_name: 'Washington', alias: "", password: "", email: "", about: "", artist_type: 'performer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Meryl', last_name: 'Streep', alias: "", password: "", email: "", about: "", artist_type: 'performer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Viola', last_name: 'Davis', alias: "", password: "", email: "", about: "", artist_type: 'performer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    // -------------- WRITER --------------
    {first_name: 'Stephen', last_name: 'King', alias: "", password: "", email: "", about: "", artist_type: 'writer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Enest', last_name: 'Hemingway', alias: "", password: "", email: "", about: "", artist_type: 'writer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Mark', last_name: 'Twain', alias: "", password: "", email: "", about: "", artist_type: 'writer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'J. K.', last_name: 'Rowling', alias: "", password: "", email: "", about: "", artist_type: 'writer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Emily', last_name: 'Dickinson', alias: "", password: "", email: "", about: "", artist_type: 'writer', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    // -------------- CULINARY --------------
    {first_name: 'Gordon', last_name: 'Ramsay', alias: "", password: "", email: "", about: "", artist_type: 'culinary', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Anthony', last_name: 'Bourdain', alias: "", password: "", email: "", about: "", artist_type: 'culinary', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Rachel', last_name: 'Ray', alias: "", password: "", email: "", about: "", artist_type: 'culinary', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Cat', last_name: 'Cora', alias: "", password: "", email: "", about: "", artist_type: 'culinary', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    {first_name: 'Julia', last_name: 'Child', alias: "", password: "", email: "", about: "", artist_type: 'culinary', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    // {first_name: 'Julia', last_name: 'Child', alias: "", password: "", email: "", about: "", artist_type: 'rastarou', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
    // {first_name: 'Julia', last_name: 'Child', alias: "", password: "", email: "", about: "", artist_type: 'rastarou', gallery: {title: '', description: '', entries: [] }, id: nanoid()},
]

// --------------------------------------- FILL GALLERY ---------------------------------
// --------------------------------------- FILL GALLERY ---------------------------------

const nickNames = ['Diesel', 'Sizzle', 'Meister', 'Blizzy', 'Drizzy']

const artist_Seeds = sampleArtists.map(artist => {
    artist.about = `${artist.first_name} is a ${artist.artist_type} with a great knack for his/her craft. Check out his/her gallery!`
    var { gallery } = artist
    artist.alias = artist.first_name.split("", 1)[0] + nickNames[Math.floor(Math.random() * nickNames.length)]
    let noSpace = artist.first_name.split(' ').join('')
    artist.email = `${noSpace}@gmail.com`
    artist.password = `${artist.last_name}${artist.artist_type}`
    gallery.title = `${artist.first_name}'s Gallery`;
    gallery.description = "This is an awesome gallery that brings out the best in all of the things that I care about."
    
    let random = () => Math.floor(Math.random() * 10)
    
    for(let j = 0; j < 4; j++) {
        let newTitle = `Entry Title ${j}`
        let image_1 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let image_2 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let image_3 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let image_4 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let image_5 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let image_6 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let image_7 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let image_8 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let image_9 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let image_10 = {url: `https://source.unsplash.com/random/24${random()}x24${random()}`, public_id: nanoid()}
        let desc = "I'm very excited to bring this new level of professionalism to you!!"

        let newEntry = {title: `Entry #${j + 1}`, files: [image_1, image_2, image_3,image_4, image_5, image_6, image_7, image_8, image_9], description: desc, entry_id: nanoid()}

        gallery.entries.push(newEntry)
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
// ------------------------------------ SEEDS ^^^^^^ ------------------------------------
// ------------------------------------ SEEDS ^^^^^^ ------------------------------------
// ------------------------------------ SEEDS ^^^^^^ ------------------------------------
// ------------------------------------ SEEDS ^^^^^^ ------------------------------------


const BASE_URL = 'http://localhost:8000/artists'

const initialState = {
    artists: artist_Seeds,
    sortedArtists: sortedArtists(),
    selectedArtist: {},

    artistTypes: getTypes(),
    galleries: getGalleries(),
    sortedGalleries: sortedGalleries(),

    selectedGalleryEntry: {},

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
        console.log(response)
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
        console.log('---------- UPDATE ARTIST ----------')
        const response = await axios.put(UPDATE_URL, artist)
        console.log(response)
        // return response
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
// ------------------------------------ SLICE ------------------------------------
// ------------------------------------ SLICE ------------------------------------
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
        selectArtist: (state, action) => {
            console.log('--- FIND ARTIST ---')
            const {artistID} = action.payload
            const found = state.artists.filter(artist => artist.id === artistID)[0]
            state.selectedArtist = found
            console.log(found)
        },
        selectGalleryEntry: (state, action) => {
            if(action.payload === null) {
                state.selectedGalleryEntry = null
                return
            };

            const {artist, entry_id} = action.payload
            const selected = artist.gallery.entries.filter(entry => entry.entry_id === entry_id)[0];
            state.selectedGalleryEntry = selected
            console.log("SELECT ENTRY")
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

export const { selectArtist, selectGalleryEntry } = artistSlice.actions;

export const allArtists = (state) => state.artist.artists;
export const foundArtist = (state) => state.artist.selectedArtist
export const artistsByType = (state) => state.artist.sortedArtists;
export const artistTypes = (state) => state.artist.artistTypes;
export const getArtistStatus = (state) => state.artist.loading;


export const allGalleries = (state) => state.artist.galleries;
export const galleriesByType = (state) => state.artist.sortedGalleries;
export const selectedEntry = (state) => state.artist.selectedGalleryEntry


export default artistSlice.reducer;