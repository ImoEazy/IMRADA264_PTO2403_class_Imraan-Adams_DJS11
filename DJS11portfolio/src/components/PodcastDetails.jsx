import React from "react";

const PodcastDetails = ({ show }) => {
  return (
    <div>
      <h2>{show.title}</h2>
      <p>{show.description}</p>
      <h3>Seasons:</h3>
      <ul>
        {show.seasons.map((season) => (
          <li key={season.id}>
            <h4>{season.title}</h4>
            <ul>
              {season.episodes.map((episode) => (
                <li key={episode.id}>
                  <button onClick={() => alert(`Playing ${episode.title}`)}>
                    {episode.title}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastDetails;