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
          <a href="https://www.linkedin.com/in/tklong27/"><img src={linkedin} height='42' width='42' /></a>
          <a href="https://www.instagram.com/tklong27/"><img src={instagram} height='42' width='42' /></a>
        </div>
      </div>
    );
  }
}

export default Footer;
