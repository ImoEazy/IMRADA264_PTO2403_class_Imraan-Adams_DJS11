import React, { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

  return (
    <div>
      <h1 className="text-2xl font-bold">Favorites</h1>
      <div>
        {favorites.length === 0 ? (
          <p>No favorites added yet</p>
        ) : (
          favorites.map((episode) => (
            <div key={episode.id} className="p-4 border rounded-md shadow-md mt-2">
              <h4 className="text-lg font-bold">{episode.title}</h4>
              <button onClick={() => removeFavorite(episode.id)} className="text-red-500">
                Remove from Favorites
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;