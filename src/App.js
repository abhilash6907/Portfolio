import React from 'react';
import './App.css';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';

import{Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="" element={<Project/>}/>
    </Routes>
    </>
  );
}

export default App;
