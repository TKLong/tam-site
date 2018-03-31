import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';

class Howdy extends Component {
  render() {
    return (
      <div className="ux-page">
        <div className="title-wrapper">
          <img src={placeholder} height='400px' width='400px' />
          <h2>Project Title</h2>
        </div>
        <div className="section">
          <h3>Section title</h3>
          <div className="section-content">
            <div className="text">
              <p>Text</p>
            </div>
            <div className="image">
              <img src={placeholder} height='300px' width='300px' />
            </div>
          </div>
        </div>
        <div className="section">
          <h3>Section title</h3>
          <div className="section-content">
            <div className="image">
              <img src={placeholder} height='300px' width='300px' />
            </div>
            <div className="text">
              <p>Text</p>
            </div>
          </div>
        </div>
        <div className="section">
          <h3>Section title</h3>
          <div className="section-content">
            <div className="text">
              <p>Text</p>
            </div>
            <div className="image">
              <img src={placeholder} height='300px' width='300px' />
            </div>
          </div>
        </div>
        <div className="study-link">
          Click here for the PDF
        </div>
        <div className="options">
          <Link to='/home'>
            <button>Home</button>
          </Link>
          <Link to='/work'>
            <button>More Projects</button>
          </Link>
          <Link to='/about'>
            <button>About me</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Howdy;
