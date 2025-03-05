import React, { useState } from 'react';

const SeasonSelector = ({ seasons, onSeasonChange }) => {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]?.id || null);

  const handleSeasonChange = (seasonId) => {
    setSelectedSeason(seasonId);
    onSeasonChange(seasonId);
  };

  if (seasons.length === 0) {
    return <p>No seasons available</p>;
  }

  return (
    <div className="flex space-x-4 mt-4">
      {seasons.map((season, index) => (
        <button
          key={season.id}
          onClick={() => handleSeasonChange(season.id)}
          className={`flex flex-col items-center px-4 py-1 rounded-lg transition-colors ${
            selectedSeason === season.id ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
          aria-pressed={selectedSeason === season.id}
        >
          <img
            src={season.image}
            alt={`${season.title} thumbnail`}
            className="w-20 h-20 object-cover rounded-lg mb-2"
          />
          <span className="font-bold">Season {index + 1}</span>
          <span>{season.title}</span>
          <span className="text-sm text-white-600">{season.episodes.length} episodes</span>
        </button>
      ))}
    </div>
  );
};

export default SeasonSelector;