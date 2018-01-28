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
              <p>Raised in the heart of it all, I am a Columbus, Ohio native, now
              living in Austin, Texas. I am currently working as a Senior User
              Experience Associate at athenahealth. I love what I do.</p>
              <p>While interaction and user flow design are some of my core strengths,
              you will often find me participating in a variety of cross-disciplinary
              activities including user research, stakeholder interviews, information
              architecture, content strategy, front end development, and even some
              audio production. It was my career goal, once upon a time, to be a
              record producer. Making music is still something I love to do, but is
              much more of a hobby at this point.</p>
              <p>When it comes to work, I want to be involved in projects that I
              find challenging with people that inspire me. Thanks for stopping by.
              </p>
              <p>— Zach</p>
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
