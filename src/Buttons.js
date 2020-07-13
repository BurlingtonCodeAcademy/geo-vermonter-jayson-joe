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
    this.setState({
      gameStarted: true,
    });
  };

  handleGuessButton = (event) => {
    event.preventDefault();

    this.setState({
      disabled: false,
      gameStarted: true
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

handleModalOpen = () => {

}



  render() {
    return (
      <div className="Buttons">
        <button
          disabled={!this.props.disabled}
          onClick={(event) => {
            this.props.handleClick(event)
          this.handleClick()}}
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
          onClick={this.handleQuitButton}
        >
          QUIT
        </button>
      
        <p>Town: {this.state.gameStarted ? "?" : this.props.currentTown} </p>
        <p>County: {this.state.gameStarted ? "?" : this.props.currentCounty} </p> 
        <p>Lattitude: {this.state.gameStarted ? "?" : this.props.randomLat} </p>
        <p>Longitude: {this.state.gameStarted ? "?": this.props.randomLong} </p>
      </div>
    );
  }
}
  
export default Buttons;

/*function getRandomArbitrary(min, max) {
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
}*/

/*class quitButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuitButton
  }
}

function quitButton(props) {
  return (
    <button onClick={props.onClick}>
    Quit
    </button>
  )
}*/