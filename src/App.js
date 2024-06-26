import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ReadPage from './ReadPage';
import NavigationBar from './NavigationBar';

function App() {
  
  return (
    
    <Router>
      <NavigationBar />
       <Routes>
          <Route index element={<Home />} />
          <Route path="/things-to-read" element={<ReadPage />} />
        </Routes>
    </Router>

  );
}

export default App;