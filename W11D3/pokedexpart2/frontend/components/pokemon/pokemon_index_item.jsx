import App from "../../../app";

class PokemonIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <li className="pokemon-index-item">
          <span>{this.props.poke.id}</span>
          <img src={this.props.poke.imageUrl}/>
          <span>{this.props.poke.name}</span>
      </li>
    );
  }
}
export default PokemonIndexItem;