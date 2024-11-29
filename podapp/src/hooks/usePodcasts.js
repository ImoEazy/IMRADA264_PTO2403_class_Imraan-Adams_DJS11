import { useEffect, useState } from 'react';

const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app')
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching podcasts:", error);
        setLoading(false);
      });
  }, []);

  return { podcasts, loading };
};

export default usePodcasts;