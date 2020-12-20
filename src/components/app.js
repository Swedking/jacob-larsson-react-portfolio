import React, { Component } from 'react';


import PortfolioContainer from "./portfolio/portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Jacob Larsson's Portfolio</h1>
        <PortfolioContainer/>
      </div>
    );
  }
}
