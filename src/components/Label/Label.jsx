import React, { Component } from "react";
import classNames from "classnames";

import "./Label.css";

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: STATUS.NORMAL,
    };
  }

  onMouseEnter = () => {
    this.setState({ class: STATUS.HOVERED });
  }

  onMouseLeave = () => {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    const classes = classNames({
      "Label-h3": true,
      [this.props.className]: !!this.props.className,
      [this.state.class]: true
    });
    return (
      <h3
        className={classes}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.text}
      </h3>
      );
  }
}

export default Label;
