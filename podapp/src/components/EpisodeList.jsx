import React from 'react';

const EpisodeList = ({ episodes, onEpisodeSelect, addFavorite, favorites }) => {
  const isFavorite = (episodeId) => {
    return favorites.some((favorite) => favorite.id === episodeId);
  };

  const handleFavoriteToggle = (episode) => {
    if (isFavorite(episode.id)) {
      // If already favorite, remove it
      // This logic needs to be in the FavoriteContext, which we will handle
    } else {
      addFavorite(episode);
    }
  };

  return (
    <div>
      {episodes.map((episode) => (
        <div key={episode.id} className="p-4 border rounded-md shadow-md mt-2">
          <h4 className="text-lg font-bold">{episode.title}</h4>
          <p className="text-sm text-gray-600">{episode.description}</p>
          <p className="text-sm text-gray-500">Duration: {episode.duration}</p>
          <button
            onClick={() => onEpisodeSelect(episode)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Play Episode
          </button>
          <button
            onClick={() => handleFavoriteToggle(episode)}
            className={`ml-4 ${isFavorite(episode.id) ? 'text-red-500' : 'text-gray-500'}`}
          >
            {isFavorite(episode.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;