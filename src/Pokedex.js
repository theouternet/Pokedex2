import React, { Component } from 'react'
import Pokegame from './Pokegame'
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div className="Pokedex-cards">
                {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} />
                ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;