import React, { Component } from 'react';
import PetsBrowser from './containers/PetsBrowser'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PetsBrowser />
      </div>
    );
  }
}

export default App;
