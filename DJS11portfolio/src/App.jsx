import React, { useState, useEffect } from "react";
import PodcastList from "./components/PodcastList";
import PodcastDetails from "./components/PodcastDetails";
import GenreFilter from "./components/GenreFilter";
import { fetchPreviews, fetchShowDetails } from "./utils/api";

const App = () => {
  const [previews, setPreviews] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  // Fetch podcasts previews on component mount
  useEffect(() => {
    const getPreviews = async () => {
      const data = await fetchPreviews();
      setPreviews(data);
    };

    getPreviews();
  }, []);

  const handleShowClick = async (showId) => {
    const showData = await fetchShowDetails(showId);
    setSelectedShow(showData);
  };

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    // Optionally, filter previews based on genreId here
  };

  return (
    <div>
      <h1>Podcast App</h1>
      <GenreFilter onChange={handleGenreChange} />
      <PodcastList
        previews={previews}
        onShowClick={handleShowClick}
        selectedGenre={selectedGenre}
      />
      {selectedShow && <PodcastDetails show={selectedShow} />}
    </div>
  );
};

export default App;

