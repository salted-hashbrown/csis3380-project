import React, { useState } from 'react';
//import {Link} from 'react-router-dom';
//import {MdOutlineRateReview} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import ReviewSubmit from './ReviewSubmit';
import '../css/movieDetails.css';

//---------------------------------
//for star rating
const labels = {
    0.5: '1',
    1: '2',
    1.5: '3',
    2: '4',
    2.5: '5',
    3: '6',
    3.5: '7',
    4: '8',
    4.5: '9',
    5: '10',
  };

  const getLabelText = (value) => {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
//---------------------------------



const MovieDetails = (props) => {
  

      const [starRateValue, setStarRateValue] = useState(0);      //for star rating Material-UI component
      const [hover, setHover] = React.useState(-1);     //for star rating Material-UI component
      //console.group({starRateValue});   //check the user feedback, the value should be x 2

      const [reviewBody, setReviewBody] = useState(''); // State to hold the review body  
      const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the review has been submitted
      const handleSubmit = () => {
        let modified_starRateValue = starRateValue * 2;
          const reviewData = {
            userId: 'sunny_test',
            //tmdbId: '298618',
            tmdbId: props.movie_id,
            reviewBody, // Use the review body from the state
            //reviewBody: 'test_1',
            rating: modified_starRateValue.toString()    //star rate value
          };
      
          // Make the POST request to the server
          fetch('http://localhost:5000/review/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(reviewData),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log('Review submitted:', data);
                // Handle successful submission here, e.g., redirect, show a success message, etc.
                setReviewBody(''); // Clear the textarea
                setStarRateValue(0); // Reset the rating value
                setIsSubmitted(true); // Set the submitted state to true
                //window.location.reload();
              })
              .catch((err) => {
                console.error('An error occurred:', err);
                // Handle error here, e.g., show an error message to the user
              });
      
      };

    return(
        <div className='movieDetailsContainer'>
            <img className='moive_img' alt='movie' src={'https://image.tmdb.org/t/p/w300' + props.movieDetailsData.poster_path} /> 
            <h1>{props.movieDetailsData.title}</h1>
            <p className='movie_detail_overview'>{props.movieDetailsData.overview}</p>
            {/* <p>{stars} {parseFloat(props.movieDetailsData.vote_average.toFixed(1))}</p> */}
            <p><Rating name="read-only" value={ Math.round(props.movieDetailsData.vote_average)/2} precision={0.5} readOnly size="small" /> 
            {props.movieDetailsData.vote_average.toFixed(1)}</p>
        </div>
    )
}

export default MovieDetails;


/* option menu
<select>
                    {Array.from({ length: 10 }, (_, i) => (
                        <option value={i + 1}>{i + 1}</option>
                    ))}
                    </select>
*/
           //<ReviewSubmit />