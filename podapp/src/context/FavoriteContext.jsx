/////////////check code for api example//////////////////////////////////
import React, { createContext, useState, useEffect } from 'react';
////////check code for new code and apu example////
// Create context for favorites
export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return storedFavorites;
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add an episode to favorites
  const addFavorite = (episode) => {
    console.log(episode.title)
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.title === episode.title)) {
        return [...prevFavorites, episode];
      }
      return prevFavorites;
    });
  };

  // Remove an episode from favorites
  const removeFavorite = (episode) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((current) => current.title !== episode.title)
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

