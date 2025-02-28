// src/pages/ShowPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeCard from '../components/EpisodeCard/EpisodeCard';
import { useFavorites } from '../context/FavoriteContext';

const ShowPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const { addFavorite } = useFavorites();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.error('Error fetching show:', error));
  }, [id]);

  if (!show) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{show.title}</h1>
      <p>{show.description}</p>
      <div className="mt-4">
        {show.seasons.map((season) => (
          <div key={season.id}>
            <h2 className="text-2xl font-semibold">{season.title}</h2>
            {season.episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} onFavorite={addFavorite} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowPage;