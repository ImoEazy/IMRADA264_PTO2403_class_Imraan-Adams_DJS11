// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FavoriteProvider } from './context/FavoriteContext';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ShowPage from './pages/ShowPage';
import Favorites from './pages/Favorites';
import GenrePage from './pages/GenrePage';

const App = () => {
  return (
    <FavoriteProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/show/:id" element={<ShowPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/genre/:id" element={<GenrePage />} />
        </Routes>
      </Router>
    </FavoriteProvider>
  );
};

export default App;
