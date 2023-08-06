import React from 'react';
//import {Link} from 'react-router-dom';
//import {MdOutlineRateReview} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
import '../css/movieDetails.css';


const MovieDetails = (props) => {
    const stars = Array.from({ length: Math.round(props.movieDetailsData.vote_average)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      ));
        console.log("data: ");
      console.log(props);
    return(
        <div className='movieDetailsContainer'>
            <img className='card_img' alt='movie' src={'https://image.tmdb.org/t/p/w300' + props.movieDetailsData.poster_path} /> 
            <h1>{props.movieDetailsData.title}</h1>
            <p>{props.movieDetailsData.overview}</p>
            <p>{stars} {parseFloat(props.movieDetailsData.vote_average.toFixed(1))}</p>
            <div>
                <h3>Write your review here:</h3>
                <p>
                    <strong>Rate:  </strong>
                    <select>
                    {Array.from({ length: 10 }, (_, i) => (
                        <option value={i + 1}>{i + 1}</option>
                    ))}
                    </select>
                </p>
                <textarea cols='60' rows='15'></textarea>
                <button>Submit review</button>
            </div>
            
        </div>
    )
}

export default MovieDetails;



