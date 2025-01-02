import React from 'react';
import Home from './Pages/Home';
import Shop from'./Pages/Shop';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import Thankyou from './Pages/Thankyou';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Navigate to='/home'/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/services" element={<Services/>}/> 
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contactus" element={<Contact/>}/>   
          <Route path="/cart" element={<Cart/>}/>   
          <Route path="/thankyou" element={<Thankyou/>}/>         
      </Routes>
    </Router>

  );
}

export default App;
