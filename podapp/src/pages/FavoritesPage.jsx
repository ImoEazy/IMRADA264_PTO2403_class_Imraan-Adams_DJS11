/////////////////////check code for api example/////////////////////////////////////
import React, { useContext } from 'react'; ////check code for for favourites contec and API///
import { FavoriteContext } from '../context/FavoriteContext';


const FavoritesPage = () => {
  const { favorites, removeFavorite } = useContext(FavoriteContext);
  

  return (
    <div>
      <h1 className="text-2xl font-bold">FAVOURITES</h1> {/* changed to favourites */}
      <div>
        {favorites.length === 0 ? (
          <p>No favorites added yet</p>
        ) : (
          favorites.map((episode) => (
            <div key={episode.id} className="p-4 border rounded-md shadow-md mt-2">
              <h4 className="text-lg font-bold">{episode.title}</h4>
              <button onClick={() => removeFavorite(episode.id)} className="text-red-500">
                Remove from Favourites
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;