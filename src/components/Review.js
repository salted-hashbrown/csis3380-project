import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
//import {reviewData} from '../data/reviewData';
import MovieDetails from './MovieDetails';
import ReviewCardList from './ReviewCardList';
import '../css/reviewCard.css';

//import { Routes, Route, NavLink } from 'react-router-dom';

//top-rated movies
//let reviewUrl_part1 = 'https://api.themoviedb.org/3/movie/';
//let reviewUrl_part2 = '/reviews?language=en-US&page=1'
//let reviewUrl = reviewUrl_part1 + "346698" + reviewUrl_part2;
//let reviewUrl = 'https://api.themoviedb.org/3/movie/346698/reviews?language=en-US&page=1';



const Review = () => {
   //------------------------------------------------------------
  //for fetching movie details data 
  const [movieDetailsData, setmovieDetailsData] = useState('');
  const {movie_id} = useParams();
  //get data from https://api.themoviedb.org/3/movie/346698?language=en-US
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;

  useEffect(() => {
    fetch(movieDetailsUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmU1M2JmY2RmMDNhNGZlMjAxZWU1Y2ZjNTZmZWFjYiIsInN1YiI6IjY0YjA3MGQyM2UyZWM4MDBlYzhhMjQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wWiTRi2q2Kiv7oFbytQOdkXqZFBnLToMAmQXkj5ZgHY'
      }
    })
    .then(res => res.json())
    .then(data => setmovieDetailsData(data))
    .catch(err => console.log('Error during fetching the data', err))    
  }, []);
  //console.log(movieDetailsData);


 //------------------------------------------------------------
 //for fetching movie review data 
  const [reviewData, setMovieData] = useState('');
  //const {movie_id} = useParams();
  const reviewUrl = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`;

  useEffect(() => {
    fetch(reviewUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmU1M2JmY2RmMDNhNGZlMjAxZWU1Y2ZjNTZmZWFjYiIsInN1YiI6IjY0YjA3MGQyM2UyZWM4MDBlYzhhMjQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wWiTRi2q2Kiv7oFbytQOdkXqZFBnLToMAmQXkj5ZgHY'
      }
    })
    .then(res => res.json())
    .then(data => setMovieData(data))
    .catch(err => console.log('Error during fetching the data', err))    
  }, []);

  
 //------------------------------------------------------------


  return (
    /* for displaying cards and search filter*/
    <div className='reviewPageContainer'>
        {/* for displaying movie details */} 
        <div>
          {movieDetailsData ? <MovieDetails movieDetailsData={movieDetailsData} /> : 'Loading...'}
        </div>


        {/* for displaying review cards */} 
        <div>
          {reviewData ? <ReviewCardList reviewData={reviewData} /> : 'Loading...'}
        </div>

    
    </div>
  )
}

export default Review;



/* const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to="html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="css">CSS</NavLink>
        </li>
        <li>
          <NavLink to="javascript">JavaScript</NavLink>
        </li>
      </ul>
    </div>

    <Routes>
      <Route path="html" element={<HTML />} />
      <Route path="css" element={<CSS />} />
      <Route path="JavaScript" element={<JavaScript />} />
    </Routes>


  </div>
);

export default Courses;

 */