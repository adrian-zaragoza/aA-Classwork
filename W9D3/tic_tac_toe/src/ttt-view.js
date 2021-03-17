class View {
  constructor(game, $el) {};

  bindEvents() {};

  makeMove($square) {};

  setupBoard() {
    grid = new Array(3);
    $('<ul class = "grid"></ul>')
    for (let i = 0; i < 10; i++) {
      $('<li class = "cell"></li>')
    };
  };



  // for (let i = 0; i < 10; i++) {
  //   $('<ul></ul>')
  // };


}

module.exports = View;
