import React from 'react';
//import {Link} from 'react-router-dom';
//import {MdOutlineRateReview} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import '../css/movieDetails.css';


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

const MovieDetails = (props) => {
    /*
    const stars = Array.from({ length: Math.round(props.movieDetailsData.vote_average)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      ));
        console.log("data: ");
      console.log(props);
    */      

      const [value, setValue] = React.useState(0);
      const [hover, setHover] = React.useState(-1);
      //console.group({value});   //check the user feedback, the value should be x 2

    return(
        <div className='movieDetailsContainer'>
            <img className='moive_img' alt='movie' src={'https://image.tmdb.org/t/p/w300' + props.movieDetailsData.poster_path} /> 
            <h1>{props.movieDetailsData.title}</h1>
            <p>{props.movieDetailsData.overview}</p>
            {/* <p>{stars} {parseFloat(props.movieDetailsData.vote_average.toFixed(1))}</p> */}
            <p><Rating name="read-only" value={ Math.round(props.movieDetailsData.vote_average)/2} precision={0.5} readOnly size="small" /> 
            {props.movieDetailsData.vote_average.toFixed(1)}</p>
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
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>
                </p>
                <textarea cols='60' rows='15'></textarea>
                <button>Submit review</button>
            </div>            
        </div>
    )
}

export default MovieDetails;


/* option menu
<select>
                    {Array.from({ length: 10 }, (_, i) => (
                        <option value={i + 1}>{i + 1}</option>
                    ))}
                    </select>
*/
