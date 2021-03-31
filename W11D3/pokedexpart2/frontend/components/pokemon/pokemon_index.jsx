import React from 'react';
import PokemonIndexItem from "./pokemon_index_item"


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  pokemonItems(){ pokemon.map(poke => {
    <PokemonIntexItem key={poke.id} pokemon={poke} />
  })};

  render(){
    return (
    <section className="pokedex">
      <ul>
        {pokemonItems()}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;