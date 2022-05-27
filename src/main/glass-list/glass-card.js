import React, { Component } from "react";

export default class GlassCard extends Component {
  constructor(props) {
    super(props);
    this.card = React.createRef();
  }

  handleClick = glass => {
    this.card.current.focus();
    this.props.changeGlass(glass);
  };

  render() {
    const { glass } = this.props;

    return (
      <div
        className="card"
        tabIndex={glass.id}
        ref={this.card}
        onClick={() => this.handleClick(glass)}
      >
        <img
          className="card-img-top"
          src={`img/g${glass.id}.jpg`}
          alt={`glass ${glass.id}`}
        />
      </div>
    );
  }
}
