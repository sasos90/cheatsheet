import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Group extends Component {
  render() {
    return (
      <div className="Group">
        <h2>{this.props.groupName}</h2>
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
  )
};

export default Group;
