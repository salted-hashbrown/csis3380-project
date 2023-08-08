import React from 'react';
import ReviewCard from './ReviewCard';
import '../css/reviewCard.css';

const ReviewCardList = ({reviewData}) => {
    //console.log("In ReviewCardList:")
    //console.log(reviewData);
    if (Array.isArray(reviewData) && reviewData.length > 0) {
        return (
            <div className='reviewCardContainer'>            
                    {
                        //reviewData.results.map((review, i) => {       //for TMDB API
                        reviewData.map((review, i) => {
                            return(
                                <ReviewCard
                                    key = {review._id}
                                    userId = {review.userId}
                                    createdDate = {review.createdDate}                                
                                    rating = {review.rating}
                                    reviewBody = {review.reviewBody}
                                />
                            );
                        })
                    }            
            </div>
        )
    } else {
        return <div className='reviewCardContainer'>
                    <div className='noReview'>
                        <h2>No review for this movie.</h2>
                    </div>
                </div>;
    }
};

export default ReviewCardList;

/*
 key = {review.id}
                                author = {review.author}
                                updated_at = {review.updated_at}                                
                                rating = {review.author_details.rating}
                                content = {review.content}
*/