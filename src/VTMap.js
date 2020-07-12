import React from "react";
import { Map, TileLayer, Polygon } from "react-leaflet";
import borderData from "./border.js";
import Buttons from "./Buttons";
import Modals from "./Modals";
import L from "leaflet";
import leafletPip from "@mapbox/leaflet-pip";

class VTMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: [44.0886, -72.7317],
      zoom: 7,
      style: { height: "600px", width: "600px" },
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: false,
      disabled: true
    };
  }
  handleClick = (event) => {
    event.preventDefault();
    let zoomCoords = randomCoords()
    this.setState({
      disabled: false,
      gameStarted: true,
      zoom: 18,
      center: zoomCoords,
    });
  };
  render() {
    let VTBorder = borderData.geometry.coordinates[0].map((coordSet) => {
      return [coordSet[1], coordSet[0]];
    });
    console.log(VTBorder);

    return (
      <>
        <div>
          <Map
            center= {this.state.center}
            zoom= {this.state.zoom}
            style={this.state.style}
            zoomControl={this.state.zoomControl}
            scrollWheelZoom={this.state.scrollWheelZoom}
            attributionControl={this.state.attributionControl}
          >
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
            <Polygon positions={VTBorder} />
          </Map>
        </div>
        <div>
          <Buttons
           disabled = {this.state.disabled}
           handleClick = {this.handleClick}
           />
        </div>
        <div></div>
      </>
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

export default VTMap;
