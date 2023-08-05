import React from 'react';
import {reviewData} from '../data/reviewData';
import ReviewCardList from './ReviewCardList';
import '../css/movieCard.css';

//import { Routes, Route, NavLink } from 'react-router-dom';

const Review = () => {
  return (
    /* for displaying cards and search filter*/
    <div className='moviePageContainer'>
        
        {/* for displaying cards */} 
        <ReviewCardList reviewData = {reviewData.results}/>
    
    </div>
  )
}

export default Review;



/* const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to="html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="css">CSS</NavLink>
        </li>
        <li>
          <NavLink to="javascript">JavaScript</NavLink>
        </li>
      </ul>
    </div>

    <Routes>
      <Route path="html" element={<HTML />} />
      <Route path="css" element={<CSS />} />
      <Route path="JavaScript" element={<JavaScript />} />
    </Routes>


  </div>
);

export default Courses;

 */