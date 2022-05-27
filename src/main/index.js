import React, { Component } from "react";
import GlassList from "./glass-list";
import Model from "./model";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { imgUrl: "./img/v1.png" };
  }

  changeGlass = imgUrl => this.setState({ imgUrl });

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <GlassList changeGlass={this.changeGlass} />
          </div>
          <div className="col-md-6">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <Model imgUrl={this.state.imgUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
