import React, { Component } from 'react';
import NavLink from './NavLink';
import Header from './Header';
import Navbar from './Navbar';
import '../App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">


        <Header />
        <Navbar />

        {this.props.children}

      </div>
    );
  }
}

export default App;
