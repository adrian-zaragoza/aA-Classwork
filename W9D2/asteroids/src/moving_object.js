function MovingObject(options){
  this.pos = options["pos"]
  this.vel = options["vel"]
  this.radius = options["radius"]
  this.color = options["color"]
};

MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
  
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
  
    ctx.fill();

};

MovingObject.prototype.move = function(pos, vel){
  let endPosition = [];
  endPosition.push((pos[0] + vel[0]));
  endPosition.push((pos[1] + vel[1]));
  return endPosition;
}

module.exports = MovingObject;