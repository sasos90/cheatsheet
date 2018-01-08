import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cheat from "./Cheat";
import "./Group.css";

class Group extends Component {

  state = {
    enteringNewCommand: false,
    newDescription: '',
    newCommand: ''
  };

  constructor() {
    super();
    this.onKeyPress = this.onKeyPress.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.setNewCommandState = this.setNewCommandState.bind(this);
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
        if (this.isDescriptionEmpty()) {
          this.newDescriptionInput.focus();
        } else if (this.commandNotEmpty()) {
          this.saveCheatProcess();
        }
      } else if (target.name === 'newDescription') {
        this.newCommandInput.focus();
      }
    }
  }

  renderCheats() {
    return this.props.cheats.map((c, index) => (
      <Cheat key={index} command={c.command} desc={c.desc} syncing={c.syncing}/>
    ));
  }

  saveCheatProcess() {
    console.log(`Save the command "${this.state.newCommand}" to server! Description: "${this.state.newDescription}"`);
    this.pushCommandToList();
    this.resetInputs();
    // Simulate GraphQL call.
    setTimeout(() => {
      if (true) {
        // Set cheats as synchronised
        this.props.cheats.map(c => {
          c.syncing = false;
          return c;
        });
      } else {
        // Revert cheat.
        delete this.props.cheats[this.props.cheats.length - 1];
      }
      this.setState({});
    }, 1000);
  }

  pushCommandToList() {
    this.props.cheats.push({
      desc: this.state.newDescription,
      command: this.state.newCommand,
      syncing: true
    });
  }

  render() {
    return (
      <div className="Group">
        <h2>{this.props.groupName}</h2>
        <div className="cheats-wrapper">{this.renderCheats()}</div>
        { this.state.enteringNewCommand ? <div className="new-command-wrapper">
          <input type="text" name="newDescription" placeholder="Description"
            value={this.state.newDescription} onKeyPress={this.onKeyPress} onChange={this.inputChange} ref={(input) => { this.newDescriptionInput = input; }} />
          <div className="new-command">
            <span className="bash-char">$&nbsp;</span>
            <input type="text" name="newCommand" onKeyPress={this.onKeyPress} placeholder="Command"
              value={this.state.newCommand} onChange={this.inputChange} ref={(input) => { this.newCommandInput = input; }} />
          </div>
        </div> :
        <div className="plus-wrapper" onClick={this.setNewCommandState}>
          <Plus />
        </div>}
      </div>
    );
  }

  resetInputs() {
    this.setState({
      enteringNewCommand: false,
      newDescription: '',
      newCommand: ''
    });
  }

  setNewCommandState() {
    this.setState({enteringNewCommand: true});
    setTimeout(() => {
      this.newDescriptionInput.focus();
    }, 0);
  }

  commandNotEmpty() {
    return this.state.newCommand !== "";
  }

  isDescriptionEmpty() {
    return this.state.newDescription === "";
  }
}

const Plus = (props) => (
  <div className="Plus">
    <svg viewBox="0 0 512 512" width={`${props.size || 30}px`}>
      <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c114.9 0 208-93.1 208-208S370.9 48 256 48zM256 446.7c-105.1 0-190.7-85.5-190.7-190.7S150.9 65.3 256 65.3 446.7 150.9 446.7 256 361.1 446.7 256 446.7z"/>
      <polygon points="264.1 128 247.3 128 247.3 247.9 128 247.9 128 264.7 247.3 264.7 247.3 384 264.1 384 264.1 264.7 384 264.7 384 247.9 264.1 247.9"/>
    </svg>
  </div>
);

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
