'use strict';

import React, { Component } from 'react';

require('./stylus');

export default class MyRoot extends Component {
  constructor(props) {
    super(props);
  }

  ok() {
    return [1, 2, 3, 4, 6];
  }

  render() {
    var ok = this.ok().map((value) => {
      return (
        <div key={value}>{value}</div>
      );
    });

    return (
      <div>{ok}</div>
    );
  }
}
