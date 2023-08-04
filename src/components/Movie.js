import React from 'react';
import MovieList from '../data/teachers';

const Movie = () => {
  let movies = MovieList.map((movie) => {
    return (
      <li className="teacher" key={movie.id} >
        <img className="teacher-img" src={movie.img_src} alt="teacher" />
        <h3>{movie.name}</h3>
        <p>{movie.bio}</p>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Movie List</h2>
      <ul className="group">
        {movies}    
      </ul>
    </div>
  );
}

export default Movie;