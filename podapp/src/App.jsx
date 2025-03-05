import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import FavoritesPage from './pages/FavoritesPage';
import { FavoriteProvider } from './context/FavoriteContext';
import AudioPlayer from './components/AudioPlayer';

function App() {
  
  const [genreFilter, setGenreFilter] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null); // To manage currently playing episode

  return (
    <FavoriteProvider>
      <Router>
        <div className="App">
          {/* Global Navigation Bar */}
          <nav className="p-4 bg-gray-800 text-white">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-xl">HOME</a>
              </li>
              <li>
                <a href="/favorites" className="text-xl">FAVOURITES</a>
              </li>
            </ul>
          </nav>

          <div className="container mx-auto p-4">
            <Routes>
              {/* Default Home Route */}
              <Route
                path="/"
                element={<ShowList genreFilter={genreFilter} setGenreFilter={setGenreFilter} />}
              />

              {/* Route for a specific show */}
              <Route
                path="/show/:id"
                element={<ShowDetails setSelectedEpisode={setSelectedEpisode} />}
              />

              {/* Favorites Page Route */}
              <Route 
                path="/favorites" 
                element={<FavoritesPage />} />
            </Routes>
          </div>

          {/* Audio Player is always visible */}
          {selectedEpisode && <AudioPlayer episode={selectedEpisode} />}
        </div>
      </Router>
    </FavoriteProvider>
  );
}

export default App; 
