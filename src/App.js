import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Work from './pages/Work.js';
import Howdy from './pages/Howdy.js';
import Ui from './pages/Ui.js';
import About from './pages/About.js';
import Footer from './components/Footer.js';
import Nav from './components/Navbar.js';

import './assets/styling/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='parent main-grid'>
          <Nav />
          <div className='changing-content'>
            <Redirect path='/' to='/work' />
            <Route path='/work' component={Work}/>
            <Route path='/howdy' component={Howdy}/>
            <Route path='/ui' component={Ui}/>
            <Route path='/about' component={About}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
