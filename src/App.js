// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Login from "./routes/login"
import About from './routes/about'
import Nav from './routes/nav'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  
  const [state, setState] = useState('')

  return (
   
    <>
     <Router>
     <Nav/>
      <Routes>
        <Route  path = '/about' element={<About/>}/>
        <Route path = '/login'  element={<Login/>}/>
      </Routes>
        
      
     </Router>
    
    </>

  );
}

export default App;
