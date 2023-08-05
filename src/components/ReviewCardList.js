import React from 'react';
import ReviewCard from './ReviewCard';
import '../css/movieCard.css';

const ReviewCardList = ({reviewData}) => {
    return (
        <div className='cardContainer'>            
                {
                    reviewData[0].results.map((review, i) => {
                        return(
                            <ReviewCard
                                //key = {review.id}
                                author = {review.author}
                                //updated_at = {review.results[i].updated_at}
                                //rating = {review.results[i].author_details.rating}
                            />
                        );
                    })
                }            
        </div>
    )
};

export default ReviewCardList;