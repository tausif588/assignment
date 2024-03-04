// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import About from './pages/About/About';
import Auth from './Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Auth />}>
        <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />}/>
        </Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
