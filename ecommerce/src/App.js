import React from 'react';
import Home from './Pages/Home'
import shop from'./Pages/shop'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Navigate to='/home'/>} />
          <Route path="/home" element={<home/>}/>
          <Route path="/shop" element={<shop/>}/>          
      </Routes>
    </Router>

  );
}

export default App;
