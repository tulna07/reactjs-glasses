import React, { Component } from "react";

export default class GlassCard extends Component {
  constructor(props) {
    super(props);
    this.card = React.createRef();
  }

  handleClick = url => {
    this.card.current.focus();
    this.props.changeGlass(url);
  };

  render() {
    const { tabIndex, idx, imgUrl } = this.props;

    return (
      <div
        className="card"
        tabIndex={tabIndex}
        ref={this.card}
        onClick={() => this.handleClick(imgUrl)}
      >
        <img
          className="card-img-top"
          src={`img/g${idx}.jpg`}
          alt={`glass ${idx}`}
        />
      </div>
    );
  }
}
