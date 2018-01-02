import React, { Component } from 'react';
import logo from './logo.svg';
import Weather from './components/weather'
import Calculator from 'react-calculator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Weather city = 'jaipur'/> */}
        <span id="calculator">
          {/* <Calculator/> */}
        </span>        
      </div>
    );
  }
}

export default App;
