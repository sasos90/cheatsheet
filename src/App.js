import React, { Component } from 'react';
import './App.css';
import Group from "./components/Group";

class App extends Component {

  renderGroups(groups) {
    return groups.map((g, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <Group groupName={g.groupName} cheats={g.cheats}></Group>
      </div>
    ));
  }

  render() {
    const groups = [];
    const gitCheats = [{
      command: 'git add .',
      desc: 'Add files to stage for commit'
    }, {
      command: 'git reset HEAD',
      desc: 'Unstage all files from commit'
    }];
    groups.push({
      groupName: 'Git',
      cheats: gitCheats
    });

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
    groups.push({
      groupName: 'Linux terminal',
      cheats: linuxCheats
    });

    return (
      <div className="App">
        <div className="row groups-wrapper">{this.renderGroups(groups)}</div>
      </div>
    );
  }
}

export default App;
