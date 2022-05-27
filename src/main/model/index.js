import React, { Component } from "react";
import Person from "./person";
import GlassImg from "./glass-img";
import GlassDetail from "./glass-detail";

export default class Model extends Component {
  render() {
    const { glass } = this.props;

    return (
      <div className="model">
        <Person />
        <GlassImg imgUrl={glass.url} />
        <GlassDetail glass={glass} />
      </div>
    );
  }
}
