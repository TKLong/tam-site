import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';
import howdyHome from '../assets/images/Howdy-home-page.jpg';
import mistakeHome from '../assets/images/mhouse-home.jpg';
import dailyUi from '../assets/images/daily-ui-home-page.jpg';

class Home extends Component {
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
            <div className="portfolio-title">
              <Link to='/howdy'><h2>Howdy</h2></Link>
            </div>
            <div className="portfolio-img">
              <Link to='/howdy'>
                <img src={howdyHome} />
              </Link>
            </div>
            <div className="portfolio-description body-text">
              <p>UX/UI design for a relationship management app</p>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-title">
              <Link to='/mhouse'><h2>Mistake House</h2></Link>
            </div>
            <div className="portfolio-img">
              <Link to='/mhouse'>
                <img src={mistakeHome} />
              </Link>
            </div>
            <div className="portfolio-description body-text">
              <p>UX/UI website redesign for a literary magazine</p>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-title">
              <Link to='/ui'><h2>UI</h2></Link>
            </div>
            <div className="portfolio-img">
              <Link to='/ui'>
                <img src={dailyUi} />
              </Link>
            </div>
            <div className="portfolio-description body-text">
              <p>A daily UI challenge focusing on quick iterations</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
