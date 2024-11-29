import React, { useState, useRef } from 'react';

const AudioPlayer = ({ episode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold">{episode.name}</h3>
      <audio ref={audioRef} src={episode.audioUrl} controls />
      <button
        onClick={togglePlayPause}
        className="mt-2 p-2 bg-blue-600 text-white rounded-md"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;