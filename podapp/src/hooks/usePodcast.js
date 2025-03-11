import { useState, useEffect } from 'react';

const usePodcast = (showId) => {
  const [data, setData] = useState(null);  // Store fetched data (show, seasons, episodes)
  const [loading, setLoading] = useState(true);  // Manage loading state
  const [error, setError] = useState(null);  // Manage error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch show data with seasons and episodes (including MP3 URLs)
        const response = await fetch(`https://podcast-api.netlify.app/`);
        if (!response.ok) {
          throw new Error('Error fetching podcast data');
        }
        const result = await response.json();
        setData(result);  // Set the data (show, seasons, and episodes)
        setLoading(false);
      } catch (err) {
        setError(err.message);  // Set error if fetching fails
        setLoading(false);
      }
    };

    fetchData();
  }, [showId]);  // Re-run the effect if showId changes

  return { data, loading, error };
};

export default usePodcast;