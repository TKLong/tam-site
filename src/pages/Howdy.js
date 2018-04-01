import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';
import home from '../assets/images/Howdy-home.jpg';
import interview from '../assets/images/mhouse-interview.jpg';
import past from '../assets/images/mhouse-past.jpg';
import poetry from '../assets/images/mhouse-poetry.jpg';
import Nav from '../components/ProjectNav.js';


class Howdy extends Component {
  render() {
    return (
      <div className="ux-page">
        <div className="title-wrapper">
          <img src={home} width='100%' />
          <h2>Howdy</h2>
          <h3>UX/UI design for Howdy, an app that keeps friends tighter than bark on a tree.</h3>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="text">
              <h3>Challenge</h3>
              <p>During a fast paced and busy life, users want to make sure
              they’re staying connected with old friends and fostering relationships
              with their acquaintances and colleagues.</p>
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
              <p>A mobile app that monitors the frequency of communication between
              contacts to see if a relationship is cooling down, schedules plans
              and outings, and facilitates conversations.</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="text">
              <h3>Process</h3>
              <p>Starting with five in-depth interviews, as well as 20+ surveys,
              during the research phase I was able to identify the who the primary
              users of Howdy would be. In tandem with conducting competitive analysis
              I was able to discover which features would be of highest priority
              to users.</p>
              <p>From my users I was able to understand the difficulties they encounter
              in maintaining their friendships, and from the research and analysis
              I was able to better understand how to address those issues. Through
              paper prototyping, ideating, and user testing, I was able to combine
              both of these two aspects, the ‘why’ and the ‘how,’ into an app that
              intuitively and effortlessly assists in the strengthening of
              friendships.</p>
            </div>
            <div className="image">
              <img src={poetry} height='100%' width='100%' />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="image">
              <img src={past} height='100%' width='100%' />
            </div>
            <div className="text">
              <h3>Insights</h3>
              <p>What originally started as an idea to help people make new friends
              rapidly changed into finding a solution that would allow users to
              maintain and strengthen their existing relationships. Even though
              users initially expressed interest and desire about making new friends,
              eventually they old me that they didn’t have enough time or enough
              emotional investment for fostering completely new relationships.
              Unknowingly at first, the majority of the users that were interviewed
              and surveyed were in long-term committed relationships--either married,
              engaged, or seriously dating. </p>
            </div>
          </div>
        </div>
        <div className="study-link">
          Click here for the PDF
        </div>
        <Nav />
      </div>
    );
  }
}

export default Howdy;
