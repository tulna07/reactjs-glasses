import React, { Component } from "react";
import GlassList from "./glass-list";
import Model from "./model";
import glassList from "./dataGlasses.json";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { glassList, glass: glassList[0] };
  }

  changeGlass = glass => this.setState({ glass });

  render() {
    const { glassList, glass } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <GlassList glassList={glassList} changeGlass={this.changeGlass} />
          </div>
          <div className="col-md-6">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <Model glass={glass} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
