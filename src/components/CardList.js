import React from 'react';
import Card from './Card';
import '../css/movieCard.css';

const CardList = ({movieData}) => {
    return (
        <div className='cardContainer'>            
                {
<<<<<<< Updated upstream:src/components/CardList.js
                    movieData.map((movie, i) => {
=======
                    movieData.results.map((movie, i) => {
>>>>>>> Stashed changes:src/components/MovieCardList.js
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


