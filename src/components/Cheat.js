import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cheat.css';

class Cheat extends Component {
  render() {
    return (
      <div className="Cheat">
        <div className="desc">{this.props.desc}</div>
        <div className="command">{this.props.command}</div>
      </div>
    );
  }
}

Cheat.propTypes = {
  command: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Cheat;
