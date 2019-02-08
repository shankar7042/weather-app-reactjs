import React, { Component } from "react";
import './style.scss';
// import SunImg from '../../resources/images/sun.png';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { location , temp_c , isDay , iconURL , text } = this.props;

    return (
      <div className="weather-container">
        <div className="header">{location}</div>
        <div className="inner-container">
          <div className="image"><img src={iconURL} alt="not found"/></div>
          <div className="current-weather">{temp_c} <sup>o</sup></div>
        </div>
        <div className="footer">{text}</div>
      </div>
    );
  }
}

export default Weather;
