const Game = require("./game");


class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    console.log("I'm inside the constructor")
  };

  bindEvents() {
    this.$li.on('click', () => {
      this.game.playMove(pos);
      $li.addClass('ul > .click');
    });
    //how do we know x vs o
    //how do we create a click event that stays once clicked (:after classes)
  };

  makeMove($square) {};

  setupBoard() {

    let $ul = $('<ul class="grid"></ul>');

    for(let row = 0; row < 3; row++){
      for (let col = 0; col < 3; col++){
        let $li = $('<li class="cell"></li>')
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  };





}

module.exports = View;
