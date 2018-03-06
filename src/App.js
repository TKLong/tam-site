import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Footer from './components/Footer.js';
import Nav from './components/Navbar.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='parent main-grid'>
          <Nav />
          <div className='changing-content'>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
