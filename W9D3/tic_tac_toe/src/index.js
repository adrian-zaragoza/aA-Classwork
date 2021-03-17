const View = require('./ttt-view.js');
const Game = require('./game.js');

  window.Game = Game;
  

  $(() => {
    // Your code here
    const rootEle = $('.ttt');
    const game = new Game();
    new View(game, rootEle);
  });
