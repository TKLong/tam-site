import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';
import howdyHome from '../assets/images/Howdy-first.jpg';
import mistakeHome from '../assets/images/mistake-home.jpg';
import dailyUi from '../assets/images/daily-ui-weather.jpg';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUpdate() {
  }

  handleClick(target) {
    this.setState({
      displaying: target,
    })
    console.log('triggered')
    console.log(this.state.displaying)
  }

  render() {
    return (
      <div className="home-grid">
        <div className="title">
          <div className="hook">
            <h1>I am a storyteller</h1>
            <h3>designing UX/UI for the web and mobile apps</h3>
          </div>
          <div className="bar">
          WORK
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-item">
            <Link to='/howdy'>Howdy</Link>
            <img src={howdyHome} />
            <p>Description</p>
          </div>
          <div className="portfolio-item">
            <Link to='/mhouse'>Mistake House</Link>
            <img src={mistakeHome} />
            <p>Description</p>
          </div>
          <div className="portfolio-item">
            <Link to='/ui'>Daily UI</Link>
            <img src={dailyUi} />
            <p>Description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
