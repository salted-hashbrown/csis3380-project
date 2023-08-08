import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
//import {reviewData} from '../data/reviewData';
import MovieDetails from './MovieDetails';
import ReviewCardList from './ReviewCardList';
import ReviewSubmit from './ReviewSubmit';
import '../css/reviewCard.css';

//import { Routes, Route, NavLink } from 'react-router-dom';
const TMDB_authorization = process.env.REACT_APP_TMDB_AUTHORIZATION;

const Review = () => {
   //------------------------------------------------------------
  //for fetching movie details data 
  const [movieDetailsData, setmovieDetailsData] = useState('');
  const {movie_id} = useParams();

  if (movie_id === undefined) {
    console.log("nothing");
    return <p>nothing to show</p>;
  }


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
  const [reviewData, setReviewData] = useState('');
  //const reviewUrl = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`;
  const reviewUrl =`http://localhost:5000/review/getreviewbymovieid/${movie_id}/`


  useEffect(() => {
    fetch(reviewUrl)
      .then(res => res.json())
      .then(data => setReviewData(data))
      .catch(err => console.log('Error during fetching the data', err))
  }, []);


  
//------------------------------------------------------------
//display movie details and reviews

  return (
    
    <div className='reviewPageContainer'>

        {/* for displaying movie details */} 
        <div className='movieDetailsContainer'>
          {movieDetailsData ? <MovieDetails 
                                movieDetailsData={movieDetailsData} 
                              /> : 'Loading...'}
          <ReviewSubmit 
            movie_id = {movie_id}
          />
        </div>


        {/* for displaying review cards */} 
        <div>

          {reviewData ? <ReviewCardList reviewData={reviewData} /> : 'Loading...'}
        </div>    
    </div>
  )
}

export default Review;


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

  //console.log("Review data:")
  //console.log(reviewData);