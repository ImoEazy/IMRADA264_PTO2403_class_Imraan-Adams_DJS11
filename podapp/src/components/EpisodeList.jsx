import React from 'react';

const EpisodeList = ({ episodes, onEpisodeSelect, addFavorite, favorites }) => {
  const isFavorite = (episodeId) => {//This function checks if a given episode is in the favorites list by comparing its id with those in the favorites array.
    return favorites.some((favorite) => favorite.id === episodeId);
  };

  //This function toggles the "favorite" status of an episode
 //If the episode is already a favorite, the removal logic (not implemented here) would handle it.
 //If the episode is not a favorite, it calls addFavorite to add the episode to the favorites list.
  const handleFavoriteToggle = (episode) => {
    if (isFavorite(episode.id)) {

    } else {
      addFavorite(episode);
    }
  };
  //The EpisodeList component maps over the episodes array and renders a div for each episode with its details and buttons for actions.
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
            onClick={() => handleFavoriteToggle(episode)}//Calls the onEpisodeSelect function with the current episode when clicked.
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