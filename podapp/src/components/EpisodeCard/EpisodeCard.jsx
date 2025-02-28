// src/components/EpisodeCard/EpisodeCard.jsx

import React from 'react';

const EpisodeCard = ({ episode, onFavorite }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h3 className="text-lg font-semibold">{episode.title}</h3>
        <audio controls>
          <source src={episode.file} type="audio/mp3" />
        </audio>
      </div>
      <button
        onClick={() => onFavorite(episode)}
        className="bg-yellow-500 text-white p-2 rounded-full"
      >
        Favorite
      </button>
    </div>
  );
};

export default EpisodeCard;