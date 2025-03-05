///////////SHOW AND SEASONS PAGE///////////////////////
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import LoadingState from './LoadingState';
import SeasonSelector from './SeasonSelector';
import EpisodeList from './EpisodeList';
import { FavoriteContext } from '../context/FavoriteContext';

const ShowDetails = ({ setSelectedEpisode }) => {
  const { id } = useParams(); // To get the show ID from the URL
  const [showData, setShowData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeason, setSelectedSeason] = useState(null); // Track the selected season
  
  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext);

  // Fetch show data by ID
  useEffect(() => {
    setLoading(true);
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch show data');
        return response.json();
      })
      .then((data) => {
        setShowData(data);
        setSelectedSeason(data.seasons[0]?.id || null); // Select the first season by default
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching show data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingState />;
  if (!showData) return <p>Error loading show details.</p>;

  // Get the current season data based on selected season
  const selectedSeasonData = showData?.seasons.find(
    (season) => season.id === selectedSeason
  );

  const handleEpisodeSelect = (episode) => {
    setSelectedEpisode(episode); // Set the selected episode to play in the AudioPlayer component
  };

  return (
    <div>
      {/* Show Details Header */}
      <div className="mb-8">
        <img
          src={showData.image}
          alt={showData.title}
          className="w-60 h-50 object-cover rounded-md"
        />
        <h2 className="text-3xl font-bold mt-4">{showData.title}</h2>
        <p className="text-gray-600 mt-2">
          Last updated: {new Date(showData.updated).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500 mt-2">Genres: {showData.genres.join(', ')}</p>
      </div>

      {/* Seasons Selector */}
      <SeasonSelector
        seasons={showData.seasons}
        onSeasonChange={(seasonId) => setSelectedSeason(seasonId)}
      />

      {/* Episodes of the selected season */}
      {selectedSeasonData && (
        <div>
          <h3 className="text-xl font-semibold mt-6">
            Episodes ({selectedSeasonData.episodes.length})
          </h3>
          <EpisodeList
            episodes={selectedSeasonData.episodes}
            onEpisodeSelect={handleEpisodeSelect}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            favorites={favorites}
          />
        </div>
      )}
    </div>
  );
};

export default ShowDetails;