import React from 'react';
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
                    <img className='card_img' alt='movie' src={'https://image.tmdb.org/t/p/w300' + props.poster_path} /> 

                    {/* movie title */}
                    <h3 className='cardTitle'>{props.title}</h3>
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



