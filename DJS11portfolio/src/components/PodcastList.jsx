import React from "react";

const PodcastList = ({ previews, onShowClick, selectedGenre }) => {
  // Filter previews based on selected genre (if any)
  const filteredPreviews = selectedGenre
    ? previews.filter((preview) => preview.genre_id === selectedGenre)
    : previews;

  return (
    <div>
      <h2>Podcast List</h2>
      <ul>
        {filteredPreviews.map((preview) => (
          <li key={preview.id}>
            <button onClick={() => onShowClick(preview.id)}>
              {preview.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;