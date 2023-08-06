import React from 'react';
//import {Link} from 'react-router-dom';
//import {MdOutlineRateReview} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
import '../css/movieDetails.css';


const MovieDetails = (props) => {
    /* const stars = Array.from({ length: Math.round(props.vote_average)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      )); */
        console.log("data: ");
      console.log(props);
    return(
        <div className='movieDetailsContainer'>
            <img className='card_img' alt='movie' src={'https://image.tmdb.org/t/p/w300' + props.movieDetailsData.poster_path} /> 
            <h1>{props.movieDetailsData.title}</h1>
            <p>Overview: {props.movieDetailsData.overview}</p>
        </div>
    )
}

export default MovieDetails;



