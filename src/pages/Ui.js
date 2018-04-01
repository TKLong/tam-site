import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';
import crowdfunding from '../assets/images/daily-ui-crowdfunding.jpg';
import customize from '../assets/images/daily-ui-customize-product.jpg';
import invoice from '../assets/images/daily-ui-invoice.jpg';
import listing from '../assets/images/daily-ui-job-listing.jpg';
import weather from '../assets/images/daily-ui-weather.jpg';
import Nav from '../components/ProjectNav.js';


class Ui extends Component {
  render() {
    return (
      <div className="ux-page">
        <div className="title-wrapper">
          <img src={weather} height='100%' width='100%' />
          <h2>Project Title</h2>
        </div>
        <h2 className="subheader">Cool story</h2>
        <div className="ui-content">
          <div className="ui-grid">
            <div className="ui-item">
              <img src={weather} height='100%' width='300px' title="long test" />
              <div className="hidden-text">
                Weather
              </div>
            </div>
            <div className="ui-item">
              <img src={crowdfunding} height='100%' width='100%' />
              <div className="hidden-text">
                Crowdfunding
              </div>
            </div>
            <div className="ui-item">
              <img src={customize} height='100%' width='100%' />
              <div className="hidden-text">
                Custom Product
              </div>
            </div>
            <div className="ui-item">
              <img src={invoice} height='100%' width='100%' />
              <div className="hidden-text">
                Invoice
              </div>
            </div>
            <div className="ui-item">
              <img src={listing} height='100%' width='100%' />
              <div className="hidden-text">
                Listing
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    );
  }
}

export default Ui;
