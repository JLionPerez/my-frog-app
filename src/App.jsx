import React from "react"
import Navbar from "./components/Navbar"
// import './App.css'
import {
  BrowserRouter as Router, 
  Routes,
  Route, 
} from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Guestbook from "./pages/guestbook"

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <nav>
        <Link to="./pages/home">Home</Link>
      </nav>
      <Routes>
        <Route path="./pages/home" element={<Home />} />
      </Routes>
    </Router>
  )
}
export default App;