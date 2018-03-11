import React, { Component } from 'react';
import '../assets/styling/App.css';
import github from '../assets/images/github.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';



class Footer extends Component {
  render() {
    return (
      <div className='footer-parent'>
        <div className='footer-links'>
          <a href="#"><img src={github} height='42' width='42' /></a>
          <a href="#"><img src={linkedin} height='42' width='42' /></a>
          <a href="#"><img src={instagram} height='42' width='42' /></a>
        </div>
        <div className='footer-name'>
          <h5>Tamara Long 2018</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
