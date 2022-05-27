import React, { Component } from "react";

export default class glassDetail extends Component {
  render() {
    const { glass } = this.props;

    return (
      <div className="glass-detail">
        <div className="d-flex justify-content-between">
          <h4 className="glass-detail__name">{glass.name}</h4>
          <p className="glass-detail__price">{glass.price}</p>
        </div>
        <p className="glass-detail__desc">{glass.desc}</p>
      </div>
    );
  }
}
