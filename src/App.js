import React, { Component } from "react";
import "./App.css";
import "./sass/app.scss";

import TopSection from "./components/top/index";
import BottomSection from "./components/bottom/index";
import axios from "axios";

const WEATHER_KEY = "d54af0bf90d7461481e113738192601";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "London",
      forcastDays: 4,
      isLoading: true
    };
  }

  updateWeather() {
    const { cityName, forcastDays } = this.state;

    const url = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${forcastDays}`;
    axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          temp_c: data.current.temp_c,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon,
          forecastDays: data.forecast.forecastday,
          isLoading: false
        });
      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API", err);
      });
  }

  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on("updateWeather", data => {
      this.setState({ cityName: data }, () => {
        this.updateWeather();
      });
    });
  }

  render() {
    const { isLoading, cityName, temp_c, isDay, iconURL, text, forecastDays } = this.state;

    return (
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h3>Weather Loading...</h3>}
          {!isLoading && (
            <div className="top-section">
              <TopSection
                location={cityName}
                temp_c={temp_c}
                isDay={isDay}
                iconURL={iconURL}
                text={text}
                eventEmitter={this.props.eventEmitter}
              />
            </div>
          )}
          <div className="bottom-section">
            <BottomSection forecastday={forecastDays}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
