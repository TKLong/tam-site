import React, { Component } from 'react';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';

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
          <div className="bar" />
        </div>
        <div className="portfolio">
          <div className="portfolio-item">
            <img src={placeholder} height='300px' width='300px' />
            <h3>Howdy</h3>
            <p>Description</p>
          </div>
          <div className="portfolio-item">
            <img src={placeholder} height='300px' width='300px' />
            <h3>Mistake House</h3>
            <p>Description</p>
          </div>
          <div className="portfolio-item">
            <img src={placeholder} height='300px' width='300px' />
            <h3>Daily UI</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
