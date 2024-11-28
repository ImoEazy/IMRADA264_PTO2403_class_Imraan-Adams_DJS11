import React from "react";

const EpisodePlayer = ({ episodeUrl }) => {
  return (
    <div>
      <audio controls>
        <source src={episodeUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default EpisodePlayer;