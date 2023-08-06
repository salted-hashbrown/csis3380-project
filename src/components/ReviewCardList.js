import React from 'react';
import ReviewCard from './ReviewCard';
import '../css/reviewCard.css';

const ReviewCardList = ({reviewData}) => {
    return (
        <div className='reviewCardContainer'>            
                {
                    reviewData.results.map((review, i) => {
                        return(
                            <ReviewCard
                                key = {review.id}
                                author = {review.author}
                                updated_at = {review.updated_at}                                
                                rating = {review.author_details.rating}
                                content = {review.content}
                            />
                        );
                    })
                }            
        </div>
    )
};

export default ReviewCardList;