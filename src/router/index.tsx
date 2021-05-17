/*
 * @Author: kingford
 * @Date: 2021-05-17 14:21:07
 * @LastEditTime: 2021-05-17 15:35:37
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { About } from '@pages/About';
import { Home } from '@pages/Home';


const AppRouter:React.FC = ()=>{
  return (
     <Router>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  )
}

export {AppRouter}