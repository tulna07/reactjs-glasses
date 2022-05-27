import React, { Component } from "react";

export default class Glass extends Component {
  render() {
    let { imgUrl } = this.props;

    return <img className="glass" src={imgUrl} alt="glass" />;
  }
}
