import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    
    const {id, name} = this.props;

    let imgSrc = `${POKE_API}${id}.png`;
    
    return (
    <div className="Pokecard">
      <h1>{name}</h1>
      <h1>{id}</h1>

      <img src={imgSrc} alt={name} />

    </div>
    )
  }
}

export default Pokecard 