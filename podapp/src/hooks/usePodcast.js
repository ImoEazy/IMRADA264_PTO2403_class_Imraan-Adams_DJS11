import { useState, useEffect } from 'react';

const usePodcast = (url) => {
  const [data, setData] = useState(null); // Store fetched data
  const [loading, setLoading] = useState(true); // Manage loading state
  const [error, setError] = useState(null); // Manage error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url); // Fetch from the API
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const result = await response.json();
        setData(result); // Set the data to the state
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.message); // If error occurs, update error state
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run the effect whenever the URL changes

  return { data, loading, error };
};

export default usePodcast;