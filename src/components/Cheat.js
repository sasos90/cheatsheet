import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cheat extends Component {
  render() {
    return (
      <div className="Cheat">
        <div>{this.props.desc}</div>
        <div>{this.props.command}</div>
      </div>
    );
  }
}

Cheat.propTypes = {
  command: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Cheat;
