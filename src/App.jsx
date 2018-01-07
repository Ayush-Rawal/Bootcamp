import React, { Component } from 'react';
import Weather from './components/weather.jsx'
import DevTools from './containers/DevTools'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather/>
        <DevTools />
      </div>
    );
  }
}

export default App;
