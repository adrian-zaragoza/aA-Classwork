const DIM_X = 480;
const DIM_Y = 640;
const NUM_ASTEROIDS = 20;

Game.prototype.addAsteroids = function(){
  const asteroids = [];
  while(NUM_ASTEROIDS > 0){
    asteroids.push(new Asteroids(this.randomPosition()))
  }
}
Game.prototype.randomPosition = function(){

}