import React, { Component } from "react";
import { EventEmitter } from "events";

class Store extends Component {
  constructor(props) {
    super(props);

    this.eventEmitter = new EventEmitter();

    this.state = {
      appName: "Weather app"
    };
  }
  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        ...this.state,
        eventEmitter: this.eventEmitter
      });
    });
  }
}

export default Store;
