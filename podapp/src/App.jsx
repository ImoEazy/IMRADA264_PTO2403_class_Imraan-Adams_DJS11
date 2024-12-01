import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    // Fetch list of shows (PREVIEW)
    axios.get('https://podcast-api.netlify.app')
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center py-4">Podcast App</h1>
      <div className="container mx-auto">
        {!selectedShow ? (
          <ShowList shows={shows} setSelectedShow={setSelectedShow} />
        ) : (
          <ShowDetails show={selectedShow} setSelectedShow={setSelectedShow} />
        )}
      </div>
    </div>
  );
}

export default App;
