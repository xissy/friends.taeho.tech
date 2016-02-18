import React, { Component, PropTypes } from 'react';

export default class Nav extends Component {
  static propTypes = {
    active: PropTypes.string,
    toggleMenu: PropTypes.func,
    user: PropTypes.object,
  };

  render() {
    return (
      <div>
      </div>
    );
  }
}
