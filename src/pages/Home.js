import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaying: 'item-all',
    };
  }
  componentWillUpdate() {
  }

  handleClick(target) {
    this.setState({
      displaying: target,
    })
    console.log('triggered')
    console.log(this.state.displaying)
  }
  setItems(target) {
    switch (target) {
      case 'item-all':
        document.getElementsByClassName('item-all').style.display = "none";
        console.log('item-all pre', document.getElementsByClassName('item-all').style.display)
        document.getElementsByClassName('item-all').style.display = "block";
        console.log('item-all after', document.getElementsByClassName('item-all').style.display)
        console.log('gotcha')
        break;
      case 'item-ui':
        document.getElementsByClassName('item-all').style.display = "none";
        document.getElementsByClassName('item-ui').style.display = "block";
        break;
      case 'item-strategy':
        document.getElementsByClassName('item-all').style.display = "none";
        document.getElementsByClassName('item-strategy').style.display = "block";
        break;
      case 'item-research':
        document.getElementsByClassName('item-all').style.display = "none";
        document.getElementsByClassName('item-research').style.display = "block";
        break;
      case 'item-photography':
        document.getElementsByClassName('item-all').style.display = "none";
        document.getElementsByClassName('item-photography').style.display = "block";
        break;
    }
  }

  render() {
    let uiStyle = {
      display: 'none',
    }
    let researchStyle = {
      display: 'none',
    }
    let strategyStyle = {
      display: 'none',
    }
    let photographyStyle = {
      display: 'none',
    }
    switch (this.state.displaying) {
      case 'item-all':
        uiStyle = {
          display: 'initial',
        }
        researchStyle = {
          display: 'initial',
        }
        strategyStyle = {
          display: 'initial',
        }
        photographyStyle = {
          display: 'initial',
        }
        break;
      case 'item-ui':
        uiStyle = {
          display: 'initial',
        }
        break;
      case 'item-strategy':
          strategyStyle = {
            display: 'initial',
          }
        break;
      case 'item-research':
        researchStyle = {
          display: 'initial',
        }
        break;
      case 'item-photography':
        photographyStyle = {
          display: 'initial',
        }
        break;
    }
    return (
      <div className="home-grid">
        <div className="title">
          <div className="hook">
            <h1>I am a storyteller</h1>
            <h3>designing UX/UI for the web and mobile apps</h3>
          </div>
        </div>
        <div className="selector">
          <div className="select-bar">
            <button onClick={() => this.handleClick('item-all')}>All</button>
            <button onClick={() => this.handleClick('item-ui')}>UI</button>
            <button onClick={() => this.handleClick('item-strategy')}>Strategy</button>
            <button onClick={() => this.handleClick('item-research')}>Research</button>
            <button onClick={() => this.handleClick('item-photography')}>Photography</button>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-items-container">
            <div style={uiStyle} className="portfolio-item item-all item-ui portfolio-item-1">portfolio-item-1</div>
            <div style={uiStyle} className="portfolio-item item-all item-ui portfolio-item-2">portfolio-item-2</div>
            <div style={uiStyle} className="portfolio-item item-all item-ui portfolio-item-3">portfolio-item-3</div>
            <div style={strategyStyle} className="portfolio-item item-all item-strategy portfolio-item-4">portfolio-item-4</div>
            <div style={researchStyle} className="portfolio-item item-all item-research portfolio-item-5">portfolio-item-5</div>
            <div style={photographyStyle} className="portfolio-item item-all item-photography portfolio-item-6">portfolio-item-6</div>
            <div style={photographyStyle} className="portfolio-item item-all item-photgraphy portfolio-item-7">portfolio-item-7</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
