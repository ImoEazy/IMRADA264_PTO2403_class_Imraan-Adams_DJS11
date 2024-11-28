import React from "react";

const GenreFilter = ({ onChange }) => {
  return (
    <div>
      <h2>Filter by Genre</h2>
      <select onChange={(e) => onChange(e.target.value)} defaultValue="">
        <option value="">All Genres</option>
        <option value="1">Personal Growth</option>
        <option value="2">Investigative Journalism</option>
        <option value="3">History</option>
        <option value="4">Comedy</option>
        <option value="5">Entertainment</option>
        <option value="6">Business</option>
        <option value="7">Fiction</option>
        <option value="8">News</option>
        <option value="9">Kids and Family</option>
      </select>
    </div>
  );
};

export default GenreFilter;