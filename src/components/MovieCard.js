import React from 'react';
import {Link} from 'react-router-dom';
import {MdOutlineRateReview} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';

const Card = (props) => {
    const stars = Array.from({ length: Math.round(props.vote_average)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      ));
      
    return(
        <div className='card'>        
                <div className='cardContent'>
                    {/* movie poster */}
                    <Link to={`/review/${props.movie_id}`}>
                        <img className='card_img' alt='movie' src={'https://image.tmdb.org/t/p/w300' + props.poster_path} /> 
                    </Link>

                    {/* movie title */}
                    <h3 className='cardTitle'>{props.title}</h3>
                    <h4>ID: {props.movie_id}</h4>
                    
                    {/* <p>{props.release_date}</p> */}
                    
                </div>
                <div className='cardFooter'>
                    <div>
                        {/* movie rating */}
                        {stars} {props.vote_average}
                    </div>
                    <div>
                        {/* review icon */}
                        <MdOutlineRateReview className='review_icon'/>
                    </div>
                    
                </div>
        </div>
    )
}

export default Card;



