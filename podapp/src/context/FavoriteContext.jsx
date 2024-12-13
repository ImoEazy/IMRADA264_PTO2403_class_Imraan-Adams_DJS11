import React, { createContext, useState, useEffect } from 'react';

// Create context for favorites
export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return storedFavorites;
  });

  // Update localStorage when favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  

  // Add an episode to favorites
  const addFavorite = (episode) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === episode.id)) {
        return [...prevFavorites, episode];
      }
      return prevFavorites;
    });
  };

//eg
  // Remove an episode from favorites
  const removeFavorite = (episodeId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((episode) => episode.id !== episodeId)
    );
  };


  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};