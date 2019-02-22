import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Card } from './components/Card';
import keys from './keys.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      input: ''
    }
  }
  submitZIP = (event) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + this.state.input + ',us&appid=' + keys.OPEN_WEATHER_MAP)
    .then(res => res.json()).then(res => {
      let options = {
        zoom: 8,
        center: { lat: res.coord.lat, lng: res.coord.lon }
      };
      let timestamp = Date.now();
      this.setState((state, props) => {
        let joined = [<Card key={timestamp} id={timestamp} weather={res}/>].concat(this.state.cards);
        return { cards: joined }
      });
      let map = new window.google.maps.Map(document.getElementById("map" + timestamp), options);
    });
  }
  typing = (event) => {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Weather Report</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <input type="text" placeholder="Enter a zipcode" onChange={this.typing} className={/[0-9]{5}/.test(this.state.input) ? "valid" : "error"}></input>
            <button onClick={this.submitZIP} disabled={!/[0-9]{5}/.test(this.state.input)}>Submit</button>
          </div>
          <div>{this.state.cards}</div>
        </header>
      </div>
    );
  }
}

export default App;
