const MovingObject = require("./moving_object");
const Util = require("./util");

function Asteroid(pos,length){
    MovingObject.color = COLOR();
    MovingObject.radius = this.RADIUS();
    MovingObject.vel = Util.randomVec(length);
    this.pos = pos;
}

Util.inherits(MovingObject, Asteroid);

Asteroid.prototype.COLOR = function(){
    return "#FFFFFF";
}

Asteroid.prototype.RADIUS = function(){
    return 20;
}
