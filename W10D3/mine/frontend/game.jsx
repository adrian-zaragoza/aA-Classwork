import React from "react"; //export default this way
import * as Minesweeper from "../minesweeper.js"; //without export default, do this way
import Board from "./board.jsx";

class Game extends React.Component{
  constructor(props){
    super(props)
    this.state = {board: new Minesweeper.Board(4, 1)}
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(){

  }

  render(){
    return(
      <div>
        <Board board={this.state.board} gameFunc={this.updateGame}/> 
      </div>
      )
  }
  
}

export default Game;