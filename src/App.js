import React from 'react';
import './App.css';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './Content';
import CourseDetails from './Content-ui/courseDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/main' element={<MainContent/>}/>
        <Route path="/course/:courseTitle" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
