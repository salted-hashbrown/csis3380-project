//This part not completed

import React from 'react';

const MovieSearch = ({ searchfield, searchChange }) => {
  return (
    <div >
      <input
        type='search'
        placeholder='search'
        onChange={searchChange}
      />
    </div>
  );
}
export default MovieSearch;