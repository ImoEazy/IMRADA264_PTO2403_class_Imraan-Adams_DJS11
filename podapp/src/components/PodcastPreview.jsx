import React from 'react';
import { genreMapping } from '../data/genreMapping';

const PodcastPreview = ({ podcasts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {podcasts.map((podcast) => (
        <div key={podcast.id} className="p-4 border rounded-md shadow-lg">
          <img src={podcast.thumbnail} alt={podcast.title} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-4">{podcast.title}</h2>
          <p className="text-sm text-gray-500 mt-2">{podcast.description}</p>
          <p className="text-sm text-gray-600 mt-2">
            Genre: {genreMapping[podcast.genre_id] || "Unknown"}
          </p>
          <a href={`/podcast/${podcast.id}`} className="text-blue-500 mt-4 block">View Details</a>
        </div>
      ))}
    </div>
  );
};

export default PodcastPreview;