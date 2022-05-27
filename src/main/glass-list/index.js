import React, { Component } from "react";
import GlassCard from "./glass-card";
import dataGlasses from "../dataGlasses.json";

export default class GlassList extends Component {
  renderGlassCard() {
    return dataGlasses.map(glass => (
      <div className="col-md-4" key={glass.id}>
        <GlassCard
          changeGlass={this.props.changeGlass}
          imgUrl={glass.url}
          tabIndex={glass.id}
          idx={glass.id}
        />
      </div>
    ));
  }

  render() {
    return (
      <div className="glass-list">
        <div className="row align-items-center">{this.renderGlassCard()}</div>
      </div>
    );
  }
}
