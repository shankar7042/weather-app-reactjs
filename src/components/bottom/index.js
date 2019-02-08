import React, { Component } from "react";
import "./style.scss";
import ForcastDay from "./forcastday";

class BottomSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { forecastday } = this.props;

    return (
      <div className="bottom-conatiner">
        <div className="inner-container">
          {forecastday &&
            forecastday.map((day, idx) => {
              return <ForcastDay key={idx} day={day.day} />;
            })}
        </div>
      </div>
    );
  }
}

export default BottomSection;
