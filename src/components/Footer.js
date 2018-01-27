import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer-parent'>
        <div className='footer-links'>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Github</a>
        </div>
        <div className='footer-name'>
          <h5>Tamara Long 2018</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
