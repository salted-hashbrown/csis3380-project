import React from 'react';
import {useState} from 'react';
//import {FaStar} from 'react-icons/fa';
import Rating from '@mui/material/Rating';


const ReviewCard = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const content = isExpanded ? props.content : props.content.substring(0,500);        //only show the first 500 characters

    let updated_at = props.updated_at.substring(0,10);  //extract the yyyy-mm-dd from the original string
    
    /*
    const stars = Array.from({ length: Math.round(props.rating)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      ));
    */

    return(
        <div className='reviewCard'>        
                <div className='reviewCardHeading'>
                    <h2>A review by {props.author}</h2>
                    <h4>Date: {updated_at}</h4>
                    {/* <h4>Rating: {stars} {props.rating}</h4> */}
                    <h4>Rating: <Rating name="read-only" value={ Math.round(props.rating)/2} precision={0.5} readOnly size="small" /> {props.rating}</h4>

                    <div className='reviewCardConent'>
                        <p>
                        {content}
                        {!isExpanded && (
                            <a href="#" onClick={(event) => {
                                event.preventDefault(); // Prevent moving to the top of the page
                                setIsExpanded(true);
                            }}
                            >
                            ...read more...
                            </a>
                        )}
                        </p>
                    </div>
                </div>
        </div>
    );
};

export default ReviewCard;


