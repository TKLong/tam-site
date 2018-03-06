import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer-parent'>
        <div className='footer-links'>
          <a href="#"><img src="tam-site/src/assets/images/github.png" height='42' width='42' /></a>
          <a href="#"><img src="../assets/images/linkedin.png" /></a>
          <a href="#"><img src="github.png" /></a>
        </div>
        <div className='footer-name'>
          <h5>Tamara Long 2018</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
