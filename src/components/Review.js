import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';

const Courses = () => (
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

    {/* <Outlet /> */}
  </div>
);

export default Courses;
