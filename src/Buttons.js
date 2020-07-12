import React from "react";

import leafletPip from "@mapbox/leaflet-pip";

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
		};
	}

	handleClick = (event) => {
		event.preventDefault();

		this.setState({ disabled: false });
		randomCoords();
		leafletPip.pointInLayer(point, layer, L.GeoJSON);
	};

	handleClick = (event) => {
		event.preventDefault();

		this.setState({ disabled: false });
		let startCoords = randomCoords();
		this.setState({});
		/*start() -----------this will be created to start the gameflow------------*/
	};

	render() {
		return (
			<div>
				<button disabled={!this.state.disabled} onClick={this.handleClick}>
					START
				</button>
				<button disabled={this.state.disabled}>GUESS</button>
				<button disabled={this.state.disabled}>QUIT</button>
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

export default Buttons;
