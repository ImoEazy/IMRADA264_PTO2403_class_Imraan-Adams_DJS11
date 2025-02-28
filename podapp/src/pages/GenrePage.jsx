// src/pages/GenrePage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowCard from '../components/ShowCard/ShowCard';

const GenrePage = () => {
  const { id } = useParams();
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/genre/${id}`)
      .then((response) => response.json())
      .then((data) => setGenre(data))
      .catch((error) => console.error('Error fetching genre:', error));
  }, [id]);

  if (!genre) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{genre.title}</h1>
      <p>{genre.description}</p>
      <div>
        {genre.showIds.map((showId) => (
          <ShowCard key={showId} show={{ id: showId }} />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;