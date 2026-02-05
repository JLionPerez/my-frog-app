import React from "react"
import Navbar from "./components/Navbar"
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import Home from "./pages/home";
// import About from "./pages/about"
// import Guestbook from "./pages/guestbook"

// function Home() {
//   return <h1>Hello</h1>
// }

function App() {
  return (
    // <BrowserRouter>
    //   <nav>
    //     <Link to="./pages/home">Home</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>   
    // </BrowserRouter>
    <h1>Hello Site 2</h1>
  )
}
export default App;