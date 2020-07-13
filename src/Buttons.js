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

  //---------Handles click event-------------//
  handleClick = (event) => {
    this.setState({
      gameStarted: true,
    });
  };

  //---------Handles event after guess button is clicked-------------//
  handleGuessButton = (event) => {
    event.preventDefault();

    this.setState({
      gameStarted: true
    });
  };

  //---------Handles event after quit button is clicked-------------//
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
