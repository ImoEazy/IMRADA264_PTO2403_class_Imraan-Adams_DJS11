import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeList from '../components/EpisodeList';

const ShowDetail = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching show details:", error);
        setLoading(false);
      });
  }, [showId]);

  if (loading) return <div>Loading...</div>;
  if (!show) return <div>Show not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{show.title}</h1>
      <p className="text-sm text-gray-500 mt-2">{show.description}</p>

      <h2 className="text-2xl mt-6">Seasons</h2>
      {show.seasons.map((season) => (
        <div key={season.id} className="mt-4">
          <h3 className="text-xl font-semibold">{season.title}</h3>
          <EpisodeList episodes={season.episodes} />
        </div>
      ))}
    </div>
  );
};

export default ShowDetail;