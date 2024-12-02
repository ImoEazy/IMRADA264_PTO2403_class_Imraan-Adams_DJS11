import React, { useState } from 'react';

const SeasonSelector = ({ seasons, onSeasonChange }) => {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]?.id);

  const handleSeasonChange = (seasonId) => {
    setSelectedSeason(seasonId);
    onSeasonChange(seasonId);
  };

  return (
    <div className="flex space-x-4 mt-4">
      {seasons.map((season) => (
        <button
          key={season.id}
          onClick={() => handleSeasonChange(season.id)}
          className={`px-4 py-2 rounded-lg ${
            selectedSeason === season.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {season.title} ({season.episodes.length} episodes)
        </button>
      ))}
    </div>
  );
};

export default SeasonSelector;