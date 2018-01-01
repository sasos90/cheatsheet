import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cheat.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Cheat extends Component {
  render() {
    return (
      <div className="Cheat">
        <div className="desc">{this.props.desc}</div>
        <CopyToClipboard text={this.props.command}>
          <div className="command"><span className="bash-char">$ </span><span className="cmd">{this.props.command}</span></div>
        </CopyToClipboard>
      </div>
    );
  }
}

Cheat.propTypes = {
  command: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Cheat;
