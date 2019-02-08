import React, { Component } from "react";
import './style.scss';

class ForcastDay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { day } = this.props;
    return (
      <div className="forcast-container">
        <div className="image">
          <img
            src={day.condition.icon}
            alt="not found"
          />
        </div>
        <div className="text">{day.avgtemp_c}</div>
        <div className="muted-text">{day.condition.text}</div>
      </div>
    );
  }
}

export default ForcastDay;
