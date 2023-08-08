import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
//import {reviewData} from '../data/reviewData';
import MovieDetails from './MovieDetails';
import ReviewCardList from './ReviewCardList';
import '../css/reviewCard.css';

//import { Routes, Route, NavLink } from 'react-router-dom';
const TMDB_authorization = process.env.REACT_APP_TMDB_AUTHORIZATION;

const Review = () => {
   //------------------------------------------------------------
  //for fetching movie details data 
  const [movieDetailsData, setmovieDetailsData] = useState('');
  const {movie_id} = useParams();
  //get data from TMDB
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;

  useEffect(() => {
    fetch(movieDetailsUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: TMDB_authorization
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
  //const reviewUrl = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`;
  const reviewUrl ='http://localhost:5000/review/getreviewbymovieid'

/*   useEffect(() => {
    fetch(reviewUrl, {
      method: 'GET',
      headers: {
        //accept: 'application/json',
        //Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmU1M2JmY2RmMDNhNGZlMjAxZWU1Y2ZjNTZmZWFjYiIsInN1YiI6IjY0YjA3MGQyM2UyZWM4MDBlYzhhMjQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wWiTRi2q2Kiv7oFbytQOdkXqZFBnLToMAmQXkj5ZgHY'
        //Authorization: TMDB_authorization
        tmdbId: "1234"
      }
    })
    .then(res => res.json())
    .then(data => setMovieData(data))
    .catch(err => console.log('Error during fetching the data', err))    
  }, []); */

  useEffect(() => {
    const tmdbId = '1234';
    fetch('http://localhost:5000/review/getreviewbymovieid', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tmdbId }),
    })
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log('Error fetching reviews:', err));
  }, []);

  console.log("Review data:")
  console.log(reviewData);

  
 //------------------------------------------------------------
//display movie details and reviews

  return (
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
