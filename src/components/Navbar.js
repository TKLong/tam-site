import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/styling/App.css';
import logo from '../assets/images/logo.png';

class Nav extends Component {
  render() {
    return (
      <div className='navbar-parent'>
        <div className='navbar-title'>
          <Link to='/'>
            <img src={logo} /><h1 id="name">Tamara Long</h1>
          </Link>
        </div>
        <div className='navbar-links'>
          <Link to='/about' id="aboutLink">About Me</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
