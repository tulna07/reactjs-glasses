import React, { Component } from "react";
import Person from "./person";
import Glass from "./glass";

export default class Model extends Component {
  render() {
    const { imgUrl } = this.props;

    return (
      <div className="model">
        <Person />
        <Glass imgUrl={imgUrl} />
      </div>
    );
  }
}
