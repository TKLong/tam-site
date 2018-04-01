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
