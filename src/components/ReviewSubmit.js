import React, { useState } from 'react';
//import {Link} from 'react-router-dom';
//import {MdOutlineRateReview} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
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



const ReviewSubmit = (props) => {
    /*
    const stars = Array.from({ length: Math.round(props.movieDetailsData.vote_average)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      ));
        console.log("data: ");
      console.log(props);
    */      

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
            <div>
                <h3>Write your review here:</h3>
                <p>
                    <strong>Rate:  </strong>
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                        <Rating
                            name="hover-feedback"
                            value={starRateValue}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setStarRateValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {starRateValue !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : starRateValue]}</Box>
                        )}
                    </Box>
                </p>
                <textarea cols='60' rows='15'
                    value = {reviewBody}
                    onChange = {(e) => setReviewBody(e.target.value)}
                    placeholder = "Write your review here..."
                />                
                <p><button onClick={handleSubmit}>Submit review</button>{isSubmitted && <strong>Review submitted</strong>} </p>

            </div>            

    )
}

export default ReviewSubmit;
