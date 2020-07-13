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

  

  handleNorthClick = (event) => {
    event.preventDefault();

    let northCoords = randomCoords()
    this.setState({
      disabled: false,
      gameStarted: true,
      zoom: 18,
      marker: northCoords,
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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomCoords() {
  let map = L.geoJSON(borderData);
  let latMin = 42.730315;
  let latMax = 45.005419;

  let longMin = -73.352182;
  let longMax = -71.510225;

  let randomLat = getRandomArbitrary(latMin, latMax);
  let randomLong = getRandomArbitrary(longMin, longMax);

  let pipArray = leafletPip.pointInLayer([randomLong, randomLat], map);
  while (pipArray.length === 0) {
    randomLat = getRandomArbitrary(latMin, latMax);
    randomLong = getRandomArbitrary(longMin, longMax);
    pipArray = leafletPip.pointInLayer([randomLong, randomLat], map);
  }

  return [randomLat, randomLong];
}
/*function northCoords(lat, long) {
  let lat = (randomLat);
  let long = (randomLong + 1);
}*/





export default Navigation;
