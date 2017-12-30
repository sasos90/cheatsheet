import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Group from "./components/Group";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Group groupName={'Git'}></Group>
        <Group groupName={'Linux terminal'}></Group>
      </div>
    );
  }
}

export default App;
