import React, { Component } from 'react';
import './App.css';
import Group from "./components/Group";

class App extends Component {
  render() {
    const gitCheats = [{
      command: 'git add .',
      desc: 'Add files to stage for commit'
    }, {
      command: 'git reset HEAD',
      desc: 'Unstage all files from commit'
    }];

    const linuxCheats = [{
      command: 'rm -rf [filename]',
      desc: 'Remove the file'
    }, {
      command: 'ls -la',
      desc: 'List directory'
    }, {
      command: 'netstat -avtpn',
      desc: 'Check used ports'
    }];

    return (
      <div className="App">
        <Group groupName={'Git'} cheats={gitCheats}></Group>
        <Group groupName={'Linux terminal'} cheats={linuxCheats}></Group>
      </div>
    );
  }
}

export default App;
