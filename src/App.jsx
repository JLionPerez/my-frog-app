import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react"
import Home from '../pages/Home'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello</h1>
        <Home />
    </div>

    // <div className="container">
    //   <div className="header">
    //     <div className="bar">
    //       <div className="logo">Logo</div>
    //       <div className="search">search</div>
    //       <div className="cart">Cart</div>
    //       <div className="account">Account</div>
    //     </div>
    //     <div className="navbar">
    //       <div className="home">Home</div>
    //       <div className="categories">Categories</div>
    //       <div className="contact">Contact Me</div>
    //       <div className="guestbook">Guestbook</div>
    //     </div>
    //   </div>
    //   <div className="body"></div>
    //   <div className="footer"></div>
    // </div>
  )
}

export default App