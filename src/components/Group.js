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

  renderCheats() {
    return this.props.cheats.map((c, index) => (
      <Cheat key={index} command={c.command} desc={c.desc}></Cheat>
    ));
  }

  render() {
    return (
      <div className="Group">
        <h2>{this.props.groupName}</h2>
        <div className="cheats-wrapper">{this.renderCheats()}</div>
        <div className="new-command-wrapper">
          { this.state.newCommand !== '' &&
            <input type="text" name="newDescription" placeholder="Description"
              value={this.state.newDescription} onChange={this.inputChange} ref={(input) => { this.newDescriptionInput = input; }} />}
          <input type="text" name="newCommand" placeholder="Command" value={this.state.newCommand} onChange={this.inputChange} />
        </div>
      </div>
    );
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
