import React from "react";
import VTMap from "./VTMap";
import leafletPip from "@mapbox/leaflet-pip";
import borderData from "./border";
import L from "leaflet";
import { Map } from "react-leaflet";

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      gameStarted: false,
      long: "",
      lat: "",
      zoom: 7,
      marker: {},
      modalOpen: false,
    };
  }

  handleClick = (event) => {
    event.preventDefault();

    let zoomCoords = randomCoords();
    this.setState({
      disabled: false,
      gameStarted: true,
      zoom: 18,
      marker: zoomCoords,
    });
  };

  handleGuessButton = (event) => {
    event.preventDefault();

    this.setState({
      disabled: false,
    });
  };

  handleQuitButton = (event) => {
    event.preventDefault();

    this.setState({
      gameStarted: false,
      zoom: 7,
      modalOpen: true,
    });
  };

  render() {
    return (
      <div className="Buttons">
        <button
          disabled={!this.props.disabled}
          onClick={this.props.handleClick}
        >
          START
        </button>
        <button
          disabled={this.props.disabled}
          onClick={this.props.handleGuessButton}
        >
          GUESS
        </button>
        <button
          disabled={this.props.disabled}
          onClick={this.props.handleQuitButton}
        >
          QUIT
        </button>
      </div>
    );
  }
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

function guessButton() {}

export default Buttons;
