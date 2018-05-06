import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/styling/App.css';

class ProjectNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
    };
  }

  componentDidMount() {
    this.findCurrLink()
  }

  findCurrLink() {
    const list = document.getElementsByClassName('link');
    for (let i = 0; i < list.length; i++ ) {
      if ( list[i].text === this.state.page ) {
        list[i].classList.add('currLink');
      }
    }
  }

  render() {
    return (
      <div className="options">
        <Link className="link" to='/howdy'>Howdy</Link>
        <Link className="link" to='/mhouse'>Mistake House</Link>
        <Link className="link" to='/ui'>UI</Link>
      </div>
    );
  }
}

export default ProjectNav;
