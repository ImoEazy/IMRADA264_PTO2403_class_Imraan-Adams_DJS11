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
      {seasons.map((season) => (
        <button
          key={season.id}
          onClick={() => handleSeasonChange(season.id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedSeason === season.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          aria-pressed={selectedSeason === season.id}
        >
          {season.title} ({season.episodes.length} episodes)
        </button>
      ))}
    </div>
  );
};

export default SeasonSelector;