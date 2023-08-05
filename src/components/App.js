import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import SignInUp from './SignInUp';
import Movie from './Movie';
import Review from './Review';

const App = () => (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signinup" element={<SignInUp title="About" />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/courses/*" element={<Review />}>
          {/* Write routes here... */}
          {/* <Route index element={<Navigate replace to="html" />} />
          <Route path="/courses/html" element={<HTML />} />
          <Route path="/courses/css" element={<CSS />} />
          <Route path="/courses/javascript" element={<JavaScript />} /> */}
        </Route>
      </Routes>
    </div>
);

export default App;
