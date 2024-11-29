import React, { useState } from 'react';

const AudioPlayer = ({ episode }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
      <div className="flex items-center">
        <button onClick={togglePlay}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <div className="ml-4">
          <strong>{episode?.title}</strong>
          <p>{episode?.duration}</p>
        </div>
        <audio
          controls
          src="https://www.example.com/audio/placeholder.mp3"
          className="ml-auto"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;