import React from "react";
import leafletPip from "@mapbox/leaflet-pip";
import borderData from "./border";
import L from "leaflet";

class Navigation extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      gameStarted: true,
      direction: "",
    };
  }

  handleClick = (event) => {
    event.preventDefault();

    this.setState({
      disabled: false,
      gameStarted: true
    });
  };

  

  handleNorthClick = (event) => {
    event.preventDefault();

    this.setState({
      disabled: false,
      gameStarted: true,
      zoom: 18,
    });
  };

  render() {
    return (
    <div id="Navigation">
      <button disabled={this.props.disabled} onClick={this.handleNorthClick}>North</button>
      <button disabled={this.props.disabled} onClick={!this.props.handleClick}>South</button>
      <button disabled={this.props.disabled} onClick={!this.props.handleClick}>East</button>
      <button disabled={this.props.disabled} onClick={!this.props.handleClick}>West</button>
    </div>
    )}
}

export default Navigation;
