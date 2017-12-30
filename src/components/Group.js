import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cheat from "./Cheat";
import "./Group.css";

class Group extends Component {

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
