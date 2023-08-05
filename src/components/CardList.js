import React from 'react';
import Card from './Card';
import '../css/movieCard.css';

const CardList = ({movieData}) => {
    return (
        <div className='cardContainer'>            
                {
                    movieData.map((movie, i) => {
                        return(
                            <Card
                                key = {movie.id}
                                title = {movie.title}
                                poster_path = {movie.poster_path}
                                release_date = {movie.release_date}
                                vote_average = {movie.vote_average}
                            />
                        );
                    })
                }            
        </div>
    )
};

export default CardList;


