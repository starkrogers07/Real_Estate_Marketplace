import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';

export default function App(){
  return(
  <BrowserRouter>
    <Header/>
  <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/sing-up' element = {<SignUp/>}/>
    <Route path='/sign-in' element = {<SignIn/>}/>
    <Route path='/profile' element = {<Profile/>}/>
    <Route path='/about' element = {<About/>}/>

  </Routes>
  </BrowserRouter>
  )
}