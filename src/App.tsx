import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<User/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
