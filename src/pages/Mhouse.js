import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';
import home from '../assets/images/mhouse-home.jpg';
import interview from '../assets/images/mhouse-interview.jpg';
import past from '../assets/images/mhouse-past.jpg';
import poetry from '../assets/images/mhouse-poetry.jpg';
import Nav from '../components/ProjectNav.js';

class Mhouse extends Component {
  render() {
    return (
      <div className="ux-page">
        <div className="title-wrapper" style={{backgroundColor: 'rgba(158, 141, 147, .5)'}}>
          <img src={home} width='100%' />
          <div className="title-text">
            <h2>Mistake House Magazine</h2>
            <h4 className="body-text">UX/UI website redesign for Mistake House, an online literary magazine.</h4>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="text">
              <h3>Problem</h3>
              <p className="body-text">As an interested reader, users wanted an easy way to read and
              navigate Mistake House, a literary magazine that they submitted content to.</p>
            </div>
            <div className="image">
              <img src={interview} height='100%' width='100%' />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="image">
              <img src={past} height='100%' width='100%' />
            </div>
            <div className="text">
              <h3>Solution</h3>
              <p className="body-text">A redesign of the current Mistake House website to include better
              navigation, improved layout and legibility, and aligning the visual
              design with the Magazine’s mission statement.</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="text">
              <h3>Process</h3>
              <p className="body-text">After exploring the site, I hypothesized that there were several
              main opportunities for improvement. First, the overall visuals of
              the site were misaligned with the Magazine’s brand and mission statement.
              Second, the information architecture of the site was lacking in some
              key areas, namely the “Soap Bubble Set” features. I was then able to
              redesign through card sorting, wireframing, and additional user testing
              before creating a high fidelity prototype.</p>
            </div>
            <div className="image">
              <img src={poetry} height='100%' width='100%' />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="skills">
              <h3>Skills</h3>
              <ul className="body-text">
                <li>Competitive Analysis</li>
                <li>Card Sorting</li>
                <li>Persona Development</li>
                <li>Wireframing</li>
                <li>Sketching</li>
                <li>Usability Testing</li>
                <li>Digital Prototyping</li>
                <li>Visual Design</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="study-link">
          <Button>View Case Study</Button>
        </div>
        <Nav page='Mistake House' />
      </div>
    );
  }
}

export default Mhouse;
