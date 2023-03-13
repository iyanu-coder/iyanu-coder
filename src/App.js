import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './portfolio/home';
import Portfolio from './portfolio/portfolio';
import About from './portfolio/about';
import Contact from './portfolio/contact';
import Error from './portfolio/error'

function App() {
  return (
      <>
        <BrowserRouter>

        <nav class="navbar bg-dark fixed-top navbar-expand-lg navbar-light bg-light">
  <p className="name">AIO</p>
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active ">
                  <Link to="/">
                    <a className="nav-link text-light">Home<span className="sr-only"></span></a>
                  </Link>  
                </li>

                <li className="nav-item">
                  <Link to="/about">
                      <a className="nav-link text-light" >About</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/portfolio">
                      <a className="nav-link text-light" >Portfolio</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact">
                      <a className="nav-link text-light" >Contact Me</a>
                  </Link>    
                </li>
              </ul>
            </div>
          </nav>
        {/* <nav className="navbar bg-dark fixed-top w-100 navbar-expand">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span id="toggle" class="navbar-toggler-icon">&equiv;</span>
            </button>
            <p className="name">AIO</p>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active ">
                  <Link to="/">
                    <a className="nav-link text-light">Home<span className="sr-only"></span></a>
                  </Link>  
                </li>

                <li className="nav-item">
                  <Link to="/about">
                      <a className="nav-link text-light" >About</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/portfolio">
                      <a className="nav-link text-light" >Portfolio</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact">
                      <a className="nav-link text-light" >Contact Me</a>
                  </Link>    
                </li>
              </ul>
            </div>
          </div>
        </nav> */}


    <Routes>
        <Route exact path="/" element={
         <Home />
          } />

        <Route exact path="/about" element={
          <About />
          } />

        <Route exact path="/portfolio" element={
          <Portfolio />
          } />

        <Route exact path="/contact" element={
          <Contact />
          } />

        <Route exact element={
          <Error />
          } />
    </Routes>


</BrowserRouter>
      </>
     );
}

export default App;
