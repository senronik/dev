import React from 'react'
import Createdata from './components/Createdata';
import Showdata from './components/Showdata';
import Navbarfile from './components/Navbarfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Updatedata from './components/Updatedata';


const App = () => {
  return (
    <>
    <Navbarfile/>
    <Routes>
    <Route path="/" element={ <Createdata/> } />
    <Route path="/showdata" element={ <Showdata/> } />
    <Route path="/updatedata" element={ <Updatedata/> } />
    </Routes>
    </>
      )
}

export default App
