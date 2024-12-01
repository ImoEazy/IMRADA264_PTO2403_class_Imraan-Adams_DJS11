import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeList from './EpisodeList';

const ShowDetails = ({ show, setSelectedShow }) => {
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    // Fetch detailed show data (Seasons and Episodes)
    axios.get(`https://podcast-api.netlify.app/id/${show.id}`)
      .then((response) => {
        setShowDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching show details:", error);
      });
  }, [show]);

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button className="text-blue-500" onClick={() => setSelectedShow(null)}>
        Back to Shows
      </button>
      <div className="mt-4">
        <img src={showDetails.image} alt={showDetails.title} className="w-full h-64 object-cover rounded-md" />
        <h2 className="text-2xl font-semibold mt-4">{showDetails.title}</h2>
        <p className="text-lg mt-2">{showDetails.description}</p>

        <div className="mt-4">
          {showDetails.seasons.map((season) => (
            <div key={season.id} className="border-b py-2">
              <h3 className="text-xl font-semibold">{season.title}</h3>
              <EpisodeList episodes={season.episodes} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;