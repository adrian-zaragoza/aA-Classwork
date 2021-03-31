import React from 'react';
import PokemonIndexItem from "./pokemon_index_item"


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  pokemonItems() {
    return (
      this.props.pokemon.map(poke => {
        return (
          <PokemonIndexItem key={poke.id} pokemon={poke} />
        )
      }) 
    
    )};

  render(){
    return (
    <section className="pokedex">
      <ul>
        {this.pokemonItems()}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;