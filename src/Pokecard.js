import React, { Component } from 'react';


class Pokecard extends Component {
  render() {

    const {id, name} = this.props;

    return (
    <div>
      <h1>{name}</h1>
      <h1>{id}</h1>

    </div>
    )
  }
}

export default Pokecard 