import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';
import crowdfunding from '../assets/images/daily-ui-crowdfunding.jpg';
import customize from '../assets/images/daily-ui-customize-product.jpg';
import invoice from '../assets/images/daily-ui-invoice.jpg';
import listing from '../assets/images/daily-ui-job-listing.jpg';
import weather from '../assets/images/daily-ui-weather.jpg';
import Nav from '../components/ProjectNav.js';


class Ui extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      image: weather,
    };
    this.toggle = this.toggle.bind(this);
  };

  toggle(selected) {
    this.setState({
      modal: !this.state.modal,
      image: selected,
    });
  };

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
            <div className="ui-item" onClick={() => this.toggle(weather)}>
              <img src={weather} height='100%' width='100%' />
              <div className="hidden-text">
                Weather
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(crowdfunding)}>
              <img src={crowdfunding} height='100%' width='100%' />
              <div className="hidden-text">
                Crowdfunding
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(customize)}>
              <img src={customize} height='100%' width='100%' />
              <div className="hidden-text">
                Custom Product
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(invoice)}>
              <img src={invoice} height='100%' width='100%' />
              <div className="hidden-text">
                Invoice
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(listing)}>
              <img src={listing} height='100%' width='100%' />
              <div className="hidden-text">
                Listing
              </div>
            </div>
          </div>
        </div>
        <Nav />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered={true}>
          <img src={this.state.image} height='100%' width='100%' />
        </Modal>
      </div>
    );
  }
}

export default Ui;
