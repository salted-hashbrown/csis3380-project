import React from 'react';
import {useState} from 'react';
//import {FaStar} from 'react-icons/fa';
import Rating from '@mui/material/Rating';



const ReviewCard = (props) => {
    //const [isExpanded, setIsExpanded] = useState(false);


    let createdDate = props.createdDate.substring(0,10);  //extract the yyyy-mm-dd from the original string
    
    /*
    const stars = Array.from({ length: Math.round(props.rating)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      ));
    */
    //console.log("props:");
    //console.log(props);

    const deleteReview = () => {
        // Assuming _id is available in your component, otherwise, you might need to pass it
        const reviewData = {
          reviewId: props._id
        };
      
        fetch('http://localhost:5000/review/delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Review deleted:', data);
            // Handle successful deletion here, e.g., redirect, update the UI, etc.
            window.location.reload(); // Optionally, you may want to reload the page
          })
          .catch((err) => {
            console.error('An error occurred:', err);
            // Handle error here, e.g., show an error message to the user
          });
      };
    

    return(
        <div className='reviewCard'>        
                <div className='reviewCardHeading'>
                    <h2>A review by {props.userId}</h2>                    
                    {
                        props.userId === sessionStorage.getItem('userName') && (
                        <>
                            <button onClick={deleteReview}>Delete</button>
                        </>
                        )
                    }
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