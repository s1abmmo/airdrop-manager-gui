import React from 'react';
import logo from './logo.svg';
import './App.css';
import './output.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
