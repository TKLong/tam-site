import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../assets/styling/App.css';
import logo from '../assets/images/logo.png';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className='navbar-parent'>
        <div className='responsive-icon'>
          <img src={logo} />
        </div>
        <div className='navbar-title'>
        <img src={logo} />
          <Link to='/'>
            <h1 id="name">Tamara Long</h1>
          </Link>
        </div>
        <div className='navbar-links'>
          <Link to='/about' id="aboutLink">About Me</Link>
        </div>
        <Dropdown className='dropdown' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Menu
          </DropdownToggle>
          <DropdownMenu right>
            <Link to='/'><DropdownItem>Home</DropdownItem></Link>
            <DropdownItem divider/>
            <Link to='/about' id="aboutLink"><DropdownItem>About Me</DropdownItem></Link>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default Nav;
