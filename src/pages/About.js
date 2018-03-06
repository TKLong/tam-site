import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="about-grid">
        <div className="self-description">
          <div className="description-content">
            <div className="placeholder-image">IMAGE</div>
            <div className="text">
              <p>Placeholder text</p>
            </div>
          </div>
        </div>
        <div className="interests">
          <div className="creating">
            <h3>Tweeting...</h3>
            <div>Placeholder</div>
          </div>
          <div className="reading">
            <h3>Reading...</h3>
            <div>Placeholder</div>
          </div>
          <div className="listening">
            <h3>Listening...</h3>
            <div>Placeholder</div>
          </div>
        </div>
        <div className="contact">
          <div className="contact-content">
            <h3>Want to work together? Email me:</h3>
            <h1>email@gmail.com</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
