import React from 'react';
import {useState} from 'react';
//import {FaStar} from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
//import StarIcon from '@mui/icons-material/Star';

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



const ReviewCard = (props) => {
    //const [isExpanded, setIsExpanded] = useState(false);      //to implement "read more..." function
    const [isUpdating, setIsUpdating] = useState(false);    //for update review
    const [updatedReviewBody, setUpdatedReviewBody] = useState('');     //for update review
    const [updatedRating, setUpdatedRating] = useState(props.rating / 2);       //for update review
    const [hover, setHover] = React.useState(-1); //for star rating hoving effect
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the review has been submitted 

    const ReviewUpdateUrl = process.env.REACT_APP_DOMAIN + `/review/update`;
    const ReviewDeleteUrl = process.env.REACT_APP_DOMAIN + `/review/delete`;  

    let createdDate = props.createdDate.substring(0,10);  //extract the yyyy-mm-dd from the original string   

    //for update review---------------------------------------------------------------------------
    const handleUpdateClick = () => {
        setIsUpdating(true);
        setUpdatedReviewBody(props.reviewBody);
        setUpdatedRating(props.rating / 2);
      };
    
      const handleUpdateSubmit = () => {
        const updateData = {
          reviewId: props._id,
          reviewBody: updatedReviewBody,
          rating: updatedRating * 2,
        };
    
        fetch(ReviewUpdateUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log('Review updated:', data);
          setIsUpdating(false);
          // Handle successful update here, e.g., refresh data, show success message, etc.
          setIsSubmitted(true); // Set the submitted state to true
          window.location.reload();
          setTimeout(() => {window.location.reload();}, 500);
        })
        .catch((err) => {
          console.error('An error occurred:', err);
          // Handle error here
        });
      };

    //--------------------------------------------------------------------------------------------



    //for delete review--------------------------------------------------------------------------
    const handleDeleteClick = () => {
        const reviewData = {
          reviewId: props._id
        };
        
        if (window.confirm('Are you sure you want to delete this review?')) {
            const reviewData = {
              reviewId: props._id
            };

            fetch(ReviewDeleteUrl, {
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
            });
        };
      };
    //---------------------------------------------------------------------------------------------

    return(
        <div className='reviewCard'>        
                <div className='reviewCardHeading'>
                    <h2>A review by {props.userId}</h2>

                    {/* the update and delete button are hidden unless props.Id = userName */}                    
                    {
                        props.userId === sessionStorage.getItem('userName') && (
                        <>
                            <button onClick={handleUpdateClick}>Update</button>
                            <button onClick={handleDeleteClick}>Delete</button>
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

                        {/* for update review, this part is hidden unless the user click the update button */}
                        {isUpdating && (            
                            <>
                                <Box className='rating_submit' sx={{
                                        width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    >
                                    <Rating name="update-rating" 
                                        value={updatedRating} 
                                        precision={0.5}
                                        onChange={(event, newValue) => setUpdatedRating(newValue)} size="small" 
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                    />
                                    {updatedRating !== null && (
                                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : updatedRating]}</Box>
                                        )}

                                </Box>
                                <textarea cols='50' rows='8' value={updatedReviewBody} onChange={e => setUpdatedReviewBody(e.target.value)} />
                                <br></br>
                                
                                <button onClick={handleUpdateSubmit}>Submit</button>{isSubmitted && <strong>Review submitted</strong>}
                            </>
                        )}
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

    /*
    const stars = Array.from({ length: Math.round(props.rating)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      ));
    */
    //console.log("props:");
    //console.log(props);
