import React from 'react';

const EpisodeList = ({ episodes }) => {
  return (
    <div className="mt-4">
      {episodes.map((episode) => (
        <div key={episode.id} className="p-4 border rounded-md shadow-md mt-2">
          <h4 className="text-lg font-bold">{episode.title}</h4>
          <p className="text-sm text-gray-600">{episode.description}</p>
          <p className="text-sm text-gray-500">Duration: {episode.duration}</p>
          <a href={episode.audio_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">Listen</a>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;