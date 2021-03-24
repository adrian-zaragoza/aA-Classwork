import React from "react";
import Game from "./game.jsx"
import Tile from "./tile.jsx"

class Board extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    const boardGame = this.props.board.grid;
    console.log(boardGame)
  
    let grid = boardGame.map((row, idx)=>{
      console.log(row)
      return( <div key={idx}> 
        {row.map((tile, idx2) => {
          return <Tile tile={tile} index={[idx, idx2]} func={Game.updateGame} key={`${idx2}`} />}
        )}
      </div>)
  
        //console.log(<Tile tile={tile} index={[idx, idx2]} func={Game.updateGame} key={`${idx2}`} />) //key react knows that they are different. unique id for each tile will have its key
      
    })
    console.log(grid)
  return(
    <div>
      <div>{grid}</div> 
      <h1>Hi?</h1>
    </div>
  )
  }
}

export default Board;