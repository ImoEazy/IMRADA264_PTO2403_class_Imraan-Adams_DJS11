// src/context/FavoriteContext.jsx

import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (episode) => {
    setFavorites((prevFavorites) => [...prevFavorites, episode]);
  };

  const removeFavorite = (episode) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== episode.id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};