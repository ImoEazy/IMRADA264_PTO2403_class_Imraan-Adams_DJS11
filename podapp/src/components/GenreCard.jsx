import React from 'react';

const GenreCard = ({ genreId }) => {
  const genreMap = {
    1: "Personal Growth",
    2: "Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family"
  };

  return (
    <p className="text-sm text-gray-600 mt-2">Genre: {genreMap[genreId]}</p>
  );
};

export default GenreCard;