import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './App.css'

class App extends Component {
  render() {
    return (
    <div className="App">
      <Pokecard 
      id="4"
      name="Charmander"
      />
    </div>
    );
  }
}

export default App;
