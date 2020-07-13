import React from "react";
import leafletPip from "@mapbox/leaflet-pip";
import borderData from "./border";
import L from "leaflet";
import Buttons from "./Buttons"

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      gameStarted: false,
    };
  }

  handleClick = (event) => {
    event.preventDefault();

    this.setState({
      disabled: false,
      gameStarted: true
    });
  };

  render() {
    return (
    <div id="Navigation">
      <button disabled={!this.props.disabled} onClick={this.props.handleClick}>North</button>
      <button disabled={!this.props.disabled} onClick={this.props.handleClick}>South</button>
      <button disabled={!this.props.disabled} onClick={this.props.handleClick}>East</button>
      <button disabled={!this.props.disabled} onClick={this.props.handleClick}>West</button>
    </div>
    )}
}

export default Navigation;
