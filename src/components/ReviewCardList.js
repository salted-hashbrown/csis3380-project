import React from 'react';
import ReviewCard from './ReviewCard';
import '../css/reviewCard.css';

const ReviewCardList = ({reviewData}) => {
    return (
        <div className='reviewCardContainer'>            
                {
                    //reviewData.results.map((review, i) => {       //for TMDB API
                    reviewData.results.map((review, i) => {
                        return(
                            <ReviewCard
                                key = {_id}
                                author = {review.userId}
                                updated_at = {review.createdDate}                                
                                rating = {review.rating}
                                content = {review.body}
                            />
                        );
                    })
                }            
        </div>
    )
};

export default ReviewCardList;

/*
 key = {review.id}
                                author = {review.author}
                                updated_at = {review.updated_at}                                
                                rating = {review.author_details.rating}
                                content = {review.content}
*/