import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="about-grid">
        <div className="self-description">
          <div className="text">Description</div>
        </div>
        <div className="interests">
          <div className="creating">Creating</div>
          <div className="reading">Reading</div>
          <div className="listening">Listening</div>
        </div>
        <div className="contact">
          <h1>Contact Email</h1>
        </div>
      </div>
    );
  }
}

export default About;
