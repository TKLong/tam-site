import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/styling/App.css';

class Nav extends Component {
  render() {
    return (
      <div className='navbar-parent'>
        <div className='navbar-title'>
          <h1>Tamara Long</h1>
        </div>
        <div className='navbar-links'>
          <Link to='/work'>Work</Link>
          <Link to='/about'>About Me</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
