//require the other js files in here.
const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d")
  window.MovingObject = MovingObject;
  window.ctx = ctx;
  window.draw = MovingObject.draw;
  window.move = MovingObject.move;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 640, 580);
  const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });
  window.mo = mo;
  window.COLOR = Asteroid.COLOR
  const ast = new Asteroid([50, 50], 10);
  window.ast = ast;
  window.RADIUS = Asteroid.RADIUS

});

