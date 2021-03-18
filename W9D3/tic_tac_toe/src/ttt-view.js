const Game = require("./game");


class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
    // console.log("I'm inside the constructor")
  };

  bindEvents() {
    this.$el.on("click", "li", (e => {
      let $square = $(e.currentTarget);
      // this.game.playMove(pos);
      $square.addClass("click");
      this.makeMove($square);
    }));
    //how do we know x vs o

    //how do we create a click event that stays once clicked (:after classes)
  };

  makeMove($square) {
    let currentPlayer = this.game.currentPlayer;
    let pos = $square.data("pos")
    this.game.playMove(pos)
    $square.addClass(currentPlayer);

    if(this.game.isOver()){
      this.$el.off("click");

      let winner = this.game.winner();
      if(winner){
        this.$el.addClass(`winner-${winner}`);
        this.$el.append(`${winner} is the Winner`);
      }else{
        this.$el.append(`It's a draw!`);
      }
      this.$el.addClass("game-over");
    }
  };

  setupBoard() {

    let $ul = $('<ul class="grid"></ul>');

    for(let row = 0; row < 3; row++){
      for (let col = 0; col < 3; col++){
        let $li = $('<li></li>')
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  };





}

module.exports = View;
