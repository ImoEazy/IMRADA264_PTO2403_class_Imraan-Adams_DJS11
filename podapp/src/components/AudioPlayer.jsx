import React, { useState } from 'react';

const AudioPlayer = ({ episode }) => {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true); // State to manage visibility

  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  const closePlayer = () => {
    setVisible(false); // Set visibility to false when closing
  };

  if (!visible) {
    return null; // Render nothing if the player is closed
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
      <div className="flex items-center">
        <button onClick={togglePlay} className="mr-4">
          {playing ? 'Pause' : 'Play'}
        </button>
        <div className="flex-1">
          <strong>{episode?.title}</strong>
          <p>{episode?.duration}</p>
        </div>
        <audio
          controls
          src="https://www.example.com/audio/placeholder.mp3"
          className="mr-4"
        />
        <button onClick={closePlayer} className="text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;