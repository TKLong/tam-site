import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';

class Ui extends Component {
  render() {
    return (
      <div className="ux-page">
        <div className="title-wrapper">
          <img src={placeholder} height='400px' width='400px' />
          <h2>Project Title</h2>
        </div>
        <h2 className="subheader">Cool story</h2>
        <div className="ui-content">
          <div className="ui-grid">
            <div className="ui-item">
              <img src={placeholder} height='300px' width='300px' title="long test" />
              <div className="hidden-text">
                This text should be hidden
              </div>
            </div>
            <div className="ui-item">
              <img src={placeholder} height='300px' width='300px' />
              <div className="hidden-text">
                This text should be hidden
              </div>
            </div>
            <div className="ui-item">
              <img src={placeholder} height='300px' width='300px' />
              <div className="hidden-text">
                This text should be hidden
              </div>
            </div>
            <div className="ui-item">
              <img src={placeholder} height='300px' width='300px' />
              <div className="hidden-text">
                This text should be hidden
              </div>
            </div>
            <div className="ui-item">
              <img src={placeholder} height='300px' width='300px' />
              <div className="hidden-text">
                This text should be hidden
              </div>
            </div>
            <div className="ui-item">
              <img src={placeholder} height='300px' width='300px' />
              <div className="hidden-text">
                This text should be hidden
              </div>
            </div>
            <div className="ui-item">
              <img src={placeholder} height='300px' width='300px' />
              <div className="hidden-text">
                This text should be hidden
              </div>
            </div>
            <div className="ui-item">
              <img src={placeholder} height='300px' width='300px' />
              <div className="hidden-text">
                This text should be hidden
              </div>
            </div>
            <div className="ui-item">
              <img src={placeholder} height='300px' width='300px' />
              <div className="hidden-text">
                This text should be hidden
              </div>
            </div>
          </div>
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

export default Ui;
