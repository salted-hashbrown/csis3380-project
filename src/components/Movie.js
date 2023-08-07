import React from 'react'
import { useState, useEffect } from 'react'
//import {movieData} from '../data/movieData';
import MovieCardList from './MovieCardList'
import MovieSearch from './MovieSearch';
import '../css/movieCard.css'

//popular movies
const movieUrl = process.env.REACT_APP_MOVIE_URL;

const Movie = () => {

  const [searchfield, setSearchfield] = useState('')
  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const [movieData, setMovieData] = useState([])
  useEffect(() => {
    fetch(movieUrl)
      .then(res => res.json())
      .then(data => setMovieData(data))
      .catch(err => console.log('Error during fetching the data', err))
  }, [])

  //console.log(movieData);

  const filteredMovies = movieData.filter(movie =>{
    return movie.title.toLowerCase().includes(searchfield.toLowerCase());
  }) 

  return !movieData.length? <h1>Loading Movie Data...</h1> : 
  (
    /* for displaying cards and search filter*/

    <div className='moviePageContainer'>

      {/* for displaying cards */}
      
      <MovieCardList movieData={filteredMovies} />



      {/* for displaying search filter */}
      <div className='movieSearchContainer'>
        <h2>Movie Search</h2>
        
        <div className='movieFilter'>
          <div className='two_column'>
            <label><strong>Keywords</strong></label>
            <MovieSearch searchChange={onSearchChange} />
           
          </div>
        </div>

        <div className='movieFilter'>
          <label><strong>Release Dates</strong></label>
          <div className='two_column'>
            <span>From</span>
            <input className='inputbox' type="date" id='start' name="startDate" />
          </div>
          <div className='two_column'>
            <span>To</span>
            <input className='inputbox' type="date" id='end' name="endDate" />
          </div>

          <div className='movieFilter'>
            <label><strong>Genres</strong></label>
            <br></br>
            <br></br>

            {/* just commiting for test, this should be done with components */}
            <div>
              <div>
                <label className="checkbox-label">
                  <input id="t1" type="checkbox" name="t1" value="action" />
                  Action
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t2" type="checkbox" name="t2" value="adventure" />
                  Adventure
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t3" type="checkbox" name="t3" value="animation" />
                  Animation
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t4" type="checkbox" name="t4" value="comedy" />
                  Comedy
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t5" type="checkbox" name="t5" value="crime" />
                  Crime
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t6" type="checkbox" name="t6" value="documentary" />
                  Documentary
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t7" type="checkbox" name="t7" value="drama" />
                  Drama
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t8" type="checkbox" name="t8" value="family" />
                  Family
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t9" type="checkbox" name="t9" value="fantasy" />
                  Fantasy
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t10" type="checkbox" name="t10" value="history" />
                  History
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t11" type="checkbox" name="t11" value="horror" />
                  Horror
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t12" type="checkbox" name="t12" value="music" />
                  Music
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t13" type="checkbox" name="t13" value="mystery" />
                  Mystery
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t14" type="checkbox" name="t14" value="romance" />
                  Romance
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t15" type="checkbox" name="t15" value="sciencefiction" />
                  Science Fiction
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t16" type="checkbox" name="t16" value="tvmovie" />
                  TV Movie
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t17" type="checkbox" name="t17" value="thriller" />
                  Thriller
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t18" type="checkbox" name="t18" value="war" />
                  War
                </label>
              </div>

              <div>
                <label className="checkbox-label">
                  <input id="t19" type="checkbox" name="t19" value="western" />
                  Western
                </label>
              </div>
            </div>

          </div>

          <div className='movieFilter'>
            <button>Search</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Movie;
