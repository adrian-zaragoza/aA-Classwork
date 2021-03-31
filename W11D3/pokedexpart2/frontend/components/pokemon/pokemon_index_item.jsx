import App from "../app";
import React from "react";
import {Link} from "react-router-dom";
class PokemonIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <Link to="/pokemon/:pokemonId"><li className="pokemon-index-item">
          <span>{this.props.pokemon.id}</span>
          <img src={this.props.pokemon.imageUrl}/>
          <span>{this.props.pokemon.name}</span>
      </li></Link>
    );
  }
}
export default PokemonIndexItem;