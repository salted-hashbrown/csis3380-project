import React from 'react';
import {useState} from 'react';
//import {FaStar} from 'react-icons/fa';
import Rating from '@mui/material/Rating';


const ReviewCard = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);


    let createdDate = props.createdDate.substring(0,10);  //extract the yyyy-mm-dd from the original string
    
    /*
    const stars = Array.from({ length: Math.round(props.rating)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      ));
    */
    console.log("props:");
      console.log(props);

    return(
        <div className='reviewCard'>        
                <div className='reviewCardHeading'>
                    <h2>A review by {props.userId}</h2>
                    <h4>Date: {createdDate}</h4>
                    {/* <h4>Rating: {stars} {props.rating}</h4> */}
                    <h4>Rating: <Rating name="read-only" value={ Math.round(props.rating)/2} precision={0.5} readOnly size="small" /> {props.rating}</h4>

                    <div className='reviewCardConent'>
                        <p>
                            {props.reviewBody}                        
                        </p>
                    </div>
                </div>
        </div>
    );
};

export default ReviewCard;


/*
const reviewBody = isExpanded ? props.reviewBody : props.reviewBody.substring(0,500);        //only show the first 500 characters

<div className='reviewCardConent'>
                        <p>
                        {reviewBody}
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
*/