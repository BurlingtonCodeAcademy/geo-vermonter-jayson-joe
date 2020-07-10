import React from "react";

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
    };
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomCoords() {
  let latMin = 42.730315;
  let latMax = 45.005419;

  let longMin = -73.352182;
  let longMax = -71.510225;

  let randomLat = getRandomArbitrary(latMin, latMax);
  let randomLong = getRandomArbitrary(longMin, longMax);

  return [randomLat, randomLong];
}

console.log(randomCoords());


export default Buttons;
