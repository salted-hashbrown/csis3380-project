import React from 'react';
import {MdOutlineRateReview} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';

const ReviewCard = (props) => {
    /*
    const stars = Array.from({ length: Math.round(props.vote_average)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      ));
    */
    return(
        <div className='reviewCard'>        
                <div className='reviewCardHeading'>
                    {/* Heading */}
                    <h2>A review by {props.author}</h2>
{/*                     <h4>Date: {props.updated_at}</h4>
                    <h4>Rating: {props.rating}</h4> */}
                </div>

                <div className='reviewCardContent'>
                    <p>
                        
                    </p>                    
                </div>
        </div>
    );
};

export default ReviewCard;
