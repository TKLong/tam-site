import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home.js';
import Howdy from './pages/Howdy.js';
import Mhouse from './pages/Mhouse.js';
import Ui from './pages/Ui.js';
import About from './pages/About.js';
import Footer from './components/Footer.js';
import ScrollToTop from './components/ScrollToTop.js';
import Nav from './components/Navbar.js';

import './assets/styling/App.css';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className='parent main-grid'>
          <Nav />
          <div className='changing-content'>
            <ScrollToTop>
            <Route exact path='/' component={Home}/>
            <Route path='/howdy' component={Howdy}/>
            <Route path='/mhouse' component={Mhouse}/>
            <Route path='/ui' component={Ui}/>
            <Route path='/about' component={About}/>
            </ScrollToTop>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
