import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';
import home from '../assets/images/mhouse-home-screen.jpg';
import interview from '../assets/images/mhouse-interview.jpg';
import past from '../assets/images/mhouse-past.jpg';
import poetry from '../assets/images/mhouse-poetry.jpg';
import Nav from '../components/ProjectNav.js';

class Mhouse extends Component {
  render() {
    return (
      <div className="ux-page">
        <div className="title-wrapper">
          <img src={home} width='100%' />
          <h2>Mistake House Magazine</h2>
          <h3>UX/UI website redesign for Mistake House, an online literary magazine.</h3>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="text">
              <h3>Problem</h3>
              <p>As an interested reader, users wanted an easy way to read and
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
              <p>A redesign of the current Mistake House website to include better
              navigation, improved layout and legibility, and aligning the visual
              design with the Magazine’s mission statement.</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="text">
              <h3>Process</h3>
              <p>After exploring the site, I hypothesized that there were several
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
        <div className="study-link">
          Click here for the PDF
        </div>
        <Nav page='mhouse' />
      </div>
    );
  }
}

export default Mhouse;
