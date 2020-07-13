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

  render() {
    return <div className="Navigation"></div>;
  }
}

export default Navigation;
