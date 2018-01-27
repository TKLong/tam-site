import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="home-grid">
        <div className="title">
          <h1>Header title</h1>
        </div>
        <div className="selector">
          <div className="select-bar"> Select </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-items-container">
            <div className="portfolio-item portfolio-item-1">portfolio-item-1</div>
            <div className="portfolio-item portfolio-item-1">portfolio-item-2</div>
            <div className="portfolio-item portfolio-item-1">portfolio-item-3</div>
            <div className="portfolio-item portfolio-item-1">portfolio-item-4</div>
            <div className="portfolio-item portfolio-item-1">portfolio-item-5</div>
            <div className="portfolio-item portfolio-item-1">portfolio-item-6</div>
            <div className="portfolio-item portfolio-item-1">portfolio-item-7</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
