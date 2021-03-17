const MovingObject = require("./moving_object");

const DIM_X = 480;
const DIM_Y = 640;
const NUM_ASTEROIDS = 20;

function Game(){
  this.asteroids = this.addAsteroids();
}
Game.prototype.addAsteroids = function(){
  const asteroids = [];
  while(NUM_ASTEROIDS >= asteroids.length){
    asteroids.push(new Asteroids(this.randomPosition(), asteroids.length))
  }
  return asteroids;
}

Game.prototype.randomPosition = function(){
  let randomX =  Math.floor(Math.random() * DIM_X); 
  let randomY =  Math.floor(Math.random() * DIM_Y);
  return [randomX, randomY]; 
}

Game.prototype.draw(ctx) = function(){
  ctx.clearRect(ctx.pos[0], ctx.pos[1], DIM_X, DIM_Y);
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }

}

Game.prototype.moveObjects = function(){
  for (let i = 0; i < this.asteroids.length; i++) {
    MovingObject.move(asteroids[i].pos, asteroids[i].vel)
  }
}