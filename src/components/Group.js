import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cheat from "./Cheat";
import "./Group.css";

class Group extends Component {

  state = {
    newDescription: '',
    newCommand: ''
  };

  constructor() {
    super();
    this.onKeyPress = this.onKeyPress.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onKeyPress(event) {
    const target = event.target;
    if (event.charCode === 13) {
      if (target.name === 'newCommand') {
        this.newDescriptionInput.focus();
      } else if (target.name === 'newDescription') {
        this.saveCheatProcess();
      }
    }
  }

  renderCheats() {
    return this.props.cheats.map((c, index) => (
      <Cheat key={index} command={c.command} desc={c.desc}></Cheat>
    ));
  }

  saveCheatProcess() {
    console.log(`Save the command "${this.state.newCommand}" to server! Description: "${this.state.newDescription}"`);
    this.pushCommandToList();
    this.resetInputs();
  }

  pushCommandToList() {
    this.props.cheats.push({
      desc: this.state.newDescription,
      command: this.state.newCommand
    });
  }

  render() {
    return (
      <div className="Group">
        <h2>{this.props.groupName}</h2>
        <div className="cheats-wrapper">{this.renderCheats()}</div>
        <div className="new-command-wrapper">
          <div className="new-command">
            <span className="bash-char">$&nbsp;</span>
            <input type="text" name="newCommand" onKeyPress={this.onKeyPress} placeholder="Command" value={this.state.newCommand} onChange={this.inputChange} />
          </div>
          { this.state.newCommand !== '' &&
            <input type="text" name="newDescription" placeholder="Description"
              value={this.state.newDescription} onKeyPress={this.onKeyPress} onChange={this.inputChange} ref={(input) => { this.newDescriptionInput = input; }} />}
        </div>
      </div>
    );
  }

  resetInputs() {
    this.setState({
      newDescription: '',
      newCommand: ''
    });
  }
}

Group.propTypes = {
  groupName: PropTypes.string.isRequired,
  cheats: PropTypes.arrayOf(
    PropTypes.shape({
      command: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Group;
