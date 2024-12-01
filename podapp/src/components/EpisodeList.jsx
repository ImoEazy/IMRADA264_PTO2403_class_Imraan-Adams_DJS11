import React from 'react';

const EpisodeList = ({ episodes }) => {
  return (
    <div className="mt-2">
      {episodes.map((episode) => (
        <div key={episode.id} className="border-b py-2">
          <a href={episode.audioUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            {episode.title}
          </a>
          <audio controls className="w-full mt-2">
            <source src={episode.audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;