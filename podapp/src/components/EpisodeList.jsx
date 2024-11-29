import React from 'react';

const EpisodeList = ({ episodes }) => {
  return (
    <div className="mt-4">
      {episodes.map((episode) => (
        <div key={episode.id} className="p-4 border rounded-md shadow-md mt-2">
          <h4 className="text-lg font-bold">{episode.title}</h4>
          <p className="text-sm text-gray-600">{episode.description}</p>
          <p className="text-sm text-gray-500">Duration: {episode.duration}</p>
          <audio controls>
            <source src="https://www.example.com/audio/placeholder.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;