import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import keys from './keys.json';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// test out apis
function initMap() {
  console.log('map initialized');
}

// dynamically load googlemaps script
let gmapsScript = document.createElement('script');
gmapsScript.onload = () => {
  let options = {
    zoom: 8,
    center: { lat: 42.3601, lng: -71.0589}
  };
  let map = new window.google.maps.Map(document.getElementById('map'), options);
}
gmapsScript.async = true;
gmapsScript.src = "https://maps.googleapis.com/maps/api/js?key=" + keys.GOOGLE_MAPS + "&callback=initMap";
document.head.appendChild(gmapsScript);

fetch('https://api.openweathermap.org/data/2.5/weather?zip=53212,us&appid=' + keys.OPEN_WEATHER_MAP)
.then(res => res.json()).then(res => {
  document.body.append(JSON.stringify(res));
});
