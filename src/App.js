import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage';
import Navbar from "./components/Navbar";
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
    <Navbar/>
      <div className="App bg-gray-50 text-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
          </Router>
  );
}

export default App;
