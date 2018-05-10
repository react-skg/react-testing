import React, { Component } from "react";
import classNames from "classnames";

import "./Label.css";

class Label extends Component {
  render() {
    const classes = classNames({
      "Label-h3": true,
      [this.props.className]: !!this.props.className
    });
    return <h3 className={classes}>{this.props.text}</h3>;
  }
}

export default Label;
