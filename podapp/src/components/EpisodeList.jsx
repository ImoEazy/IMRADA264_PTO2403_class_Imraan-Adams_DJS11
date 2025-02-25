import React from 'react';

const EpisodeList = ({ episodes, onEpisodeSelect, addFavorite, removeFavorite, favorites }) => {
  // Check if an episode is in the favorites list by title and id
  const isFavorite = (episode) => {
    return favorites.some(
      (favorite) => favorite.title === episode.title
    );
  };

  // Toggle the favorite status for a specific episode
  const handleFavoriteToggle = (episode) => {
    if (isFavorite(episode)) {
      removeFavorite(episode.id); //changed id to title///////// // Use the episode ID for removal
    } else {
      addFavorite(episode); // Add the full episode object to favorites
    }
  };

  return (
    <div>
      {episodes.map((episode) => (
        <div key={episode.id} className="p-4 border rounded-md shadow-md mt-2">
          <h4 className="text-lg font-bold">{episode.title}</h4>
          <p className="text-sm text-gray-600">{episode.description}</p>
          <p className="text-sm text-gray-500">Duration: {episode.duration || 'N/A'}</p>
          <button
            onClick={() => onEpisodeSelect(episode)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Play Episode
          </button>
          <button
            onClick={() => handleFavoriteToggle(episode)}
            className={`ml-4 px-4 py-2 rounded mt-2 ${
              isFavorite(episode) ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {isFavorite(episode) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;