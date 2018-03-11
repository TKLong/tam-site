import React, { Component } from 'react';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';

class About extends Component {
  render() {
    return (
      <div className="about-grid">
        <div className="personal-wrapper">
          <div className="self-description">
            <div className="description-content">
              <div className="placeholder-image">IMAGE</div>
              <div className="text">
                <p>Placeholder text</p>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="contact-content">
              <h3>Want to work together? Email me:</h3>
              <h1>email@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className="interests">
          <div className="interest-wrapper">
            <div className="interest-item">
              <h3>Currently Creating...</h3>
              <img className="placeholder-img" src={placeholder} />
              <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text</p>
            </div>
            <div className="interest-item">
              <h3>Currently Reading...</h3>
              <img className="placeholder-img" src={placeholder} />
              <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text</p>
            </div>
            <div className="interest-item">
              <h3>Currently Listening...</h3>
              <img className="placeholder-img" src={placeholder} />
              <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
