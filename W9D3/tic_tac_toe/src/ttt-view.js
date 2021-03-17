class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    console.log("I'm inside the constructor")
  };

  bindEvents() {};

  makeMove($square) {};

  setupBoard() {
    // grid = new Array(3);
    // $('<ul class = "grid"></ul>')
    // for (let i = 0; i < 10; i++) {
    //   $('<li class = "cell"></li>')
    // };
    let $ul = $('<ul class="grid"></ul>');

    for(let row = 0; row < 3; row++){
      for (let col = 0; col < 3; col++){
        let $li = $('<li class="cell"></li>')
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
    console.log("Inside the setupBoard")
  };



  // for (let i = 0; i < 10; i++) {
  //   $('<ul></ul>')
  // };


}

module.exports = View;
