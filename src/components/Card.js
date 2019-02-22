import React, { Component } from 'react';

export class Card extends Component {
  render() {
    return (
      <div className="Card" className="card">
        <div className="map" id={"map" + this.props.id}></div>
        <div className="weather">
          <h3 className="weather-data">Location: {this.props.weather.name}</h3>
          <h3 className="weather-data">Temperature: {(this.props.weather.main.temp*(9/5)-459.67).toFixed(2)}</h3>
          <h3 className="weather-data">Condition: {this.props.weather.weather[0].description}</h3>
          <h3 className="weather-data">Wind: {this.props.weather.wind.speed}</h3>
        </div>
      </div>
    );
  }
}