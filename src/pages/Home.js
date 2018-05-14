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

  componentDidMount() {
    this.styleNav();
  }

  componentWillUnmount() {
    this.unstyleNav();
  }

  styleNav() {
    let el = document.getElementById('name');
    el.style.borderBottom = 'thin solid black';
  }

  unstyleNav() {
    let el = document.getElementById('name');
    el.style.borderBottom = 'none';
  }

  handleClick(target) {
    this.setState({
      displaying: target,
    })
  }

  render() {
    return (
      <div className="home-grid">
        <div className="title">
          <div className="hook">
            <h1>Designing for delight</h1>
          </div>
          <div className="bar">
          WORK
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-item item-1">
            <Link to='/howdy'>
              <div className="portfolio-title">
                <h2>Howdy</h2>
              </div>
              <div className="portfolio-img">
                  <img src={howdyHome} />
              </div>
              <div className="portfolio-description body-text">
                <p>UX/UI design for a relationship management app</p>
              </div>
            </Link>
          </div>
          <div className="portfolio-item item-2">
            <Link to='/mhouse'>
              <div className="portfolio-title">
                <h2>Mistake House</h2>
              </div>
              <div className="portfolio-img">
                <img src={mistakeHome} />
              </div>
              <div className="portfolio-description body-text">
                <p>UX/UI website redesign for a literary magazine</p>
              </div>
            </Link>
          </div>
          <div className="portfolio-item item-3">
            <Link to='/ui'>
              <div className="portfolio-title">
                <h2>UI</h2>
              </div>
              <div className="portfolio-img">
                <img src={dailyUi} />
              </div>
              <div className="portfolio-description body-text">
                <p>A daily UI challenge focusing on quick iterations</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
