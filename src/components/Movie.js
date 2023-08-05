import React from 'react';
import { useState, useEffect } from 'react';
//import {movieData} from '../data/movieData';
import MovieCardList from './MovieCardList';
import '../css/movieCard.css';

//popular movies
//let movieUrl ='https://api.themoviedb.org/3/movie/popular?api_key=cfe53bfcdf03a4fe201ee5cfc56feacb&language=en-US&page=1';

//top-rated movies
let movieUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=cfe53bfcdf03a4fe201ee5cfc56feacb&language=en-US&page=1';




const Movie = () => {

 /* 
  const [movieData, setMovieData] = useState({ results: [] });
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=cfe53bfcdf03a4fe201ee5cfc56feacb&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.error('There was an error fetching the data', error));
  }, []);
  */

  const [movieData, setMovieData] = useState('');
  useEffect(() => {
    fetch(movieUrl)
    .then(res => res.json())
    .then(data => setMovieData(data))
    .catch(err => console.log('Error', err))    
  }, []);
 
  return (
    /* for displaying cards and search filter*/
    
    
    <div className='moviePageContainer'>
      
        
        {/* for displaying cards */} 
        {movieData ? <MovieCardList movieData={movieData} /> : 'Loading...'}

        {/* for displaying search filter */} 
        <div className='movieSearchContainer'>
          <h2>Movie Search</h2>

          <div className='movieFilter'>
            <div className='two_column'>
              <label><strong>Keywords</strong></label>
              <input className='inputbox' type="text" id="keywords" value=""></input>
            </div>
          </div>

          <div className='movieFilter'>
            <label><strong>Release Dates</strong></label>
            <div className='two_column'>
              <span>From</span>
              <input className='inputbox' type="date" id='start' name="startDate" />
            </div>
            <div className='two_column'>
              <span>To</span>
              <input className='inputbox' type="date" id='end' name="endDate"/>
            </div>
            
            <div className='movieFilter'>
              <label><strong>Genres</strong></label>
              <br></br>
              <br></br>
                <label>Action<input id="t1" type="checkbox" name="t1" value="action"></input></label>
                <label>Adventure<input id="t1" type="checkbox" name="t1" value="adventure"></input></label>
                <label>Animation<input id="t1" type="checkbox" name="t1" value="animation"></input></label>
                <label>Comedy<input id="t1" type="checkbox" name="t1" value="comedy"></input></label>
                <label>Crime<input id="t1" type="checkbox" name="t1" value="crime"></input></label>
                <label>Documentary<input id="t1" type="checkbox" name="t1" value="documentary"></input></label>
                <label>Drama<input id="t1" type="checkbox" name="t1" value="drama"></input></label>
                <label>Family<input id="t1" type="checkbox" name="t1" value="family"></input></label>
                <label>Fantasy<input id="t1" type="checkbox" name="t1" value="fantasy"></input></label>
                <label>History<input id="t1" type="checkbox" name="t1" value="history"></input></label>
                <label>Horror<input id="t1" type="checkbox" name="t1" value="horror"></input></label>
                <label>Music<input id="t1" type="checkbox" name="t1" value="music"></input></label>
                <label>Mystery<input id="t1" type="checkbox" name="t1" value="mystery"></input></label>
                <label>Romance<input id="t1" type="checkbox" name="t1" value="romance"></input></label>
                <label>Science Fiction<input id="t1" type="checkbox" name="t1" value="sciencefiction"></input></label>
                <label>TV Movie<input id="t1" type="checkbox" name="t1" value="tvmovie"></input></label>
                <label>Thriller<input id="t1" type="checkbox" name="t1" value="thriller"></input></label>
                <label>War<input id="t1" type="checkbox" name="t1" value="war"></input></label>
                <label>Western<input id="t1" type="checkbox" name="t1" value="western"></input></label>
            </div>

            <div className='movieFilter'>
              <button>Search</button>
            </div>

          </div>

        </div>
    </div>
  );
}

export default Movie;

/*
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
*/

