import React from 'react';
import MovieCard from './MovieCard';
import '../css/movieCard.css';

const MovieCardList = ({movieData}) => {
    return (
        <div className='cardContainer'>            
                {
                    movieData.results.map((movie, i) => {
                        return(
                            <MovieCard
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

export default MovieCardList;

