import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/globals/Header';
import Footer from './components/globals/Footer';

import Home from './features/folio/Home';
import AboutFolio from './features/folio/AboutFolio';

import ArtistAdmin from './features/artists/ArtistAdmin';
import ArtistDetail from './features/artists/ArtistDetail';
import ArtistList from './features/artists/ArtistList';
import GalleryDetail from './features/artists/GalleryDetail';
import GalleryList from './features/artists/GalleryList';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about_folio' element={<AboutFolio />} />

          <Route path='/artists' element={<ArtistList />} />
          <Route path='/artists/admin' element={<ArtistAdmin />} />
          <Route path='/artists/:id' element={<ArtistDetail />} />
          
          <Route path='/galleries' element={<GalleryList />} />
          <Route path='/galleries/:id' element={<GalleryDetail />} />

        </Routes>
      <Footer />
    </>
  );
}

export default App;
