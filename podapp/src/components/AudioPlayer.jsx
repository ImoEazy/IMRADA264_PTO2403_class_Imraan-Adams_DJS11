import React, { useState } from 'react';// 'useState' A React hook used to manage the component's state

//AudioPlayer: A functional component that accepts a prop episode.
const AudioPlayer = ({ episode }) => {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);

  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  const closePlayer = () => {
    setVisible(false);
  };

  // If the player is not visible, don't render it
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
      <div className="flex items-center">
        <button onClick={togglePlay} className="mr-4">
          {playing ? 'Pause' : 'Play'}
        </button>
        <div className="flex-1">
          <strong>{episode.title}</strong>
          <p>{episode?.duration}</p>
        </div>

        {/* Ensure audio source is correctly passed as src */}
        <audio controls src={episode.audioUrl} className="mr-4" />

        <button onClick={closePlayer} className="text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;