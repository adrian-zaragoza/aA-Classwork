const MovingObject = require("./moving_object");
const Util = require("./util");

const DEF = {
    COLOR: "#FFFFFF",
    RADIUS: 25
}

function Asteroid(options){
    options["color"] = DEF["COLOR"];
    options["pos"] = 

    vel = Util.randomVec(length);
    MovingObject ({pos: pos, radius: this.RADIUS(), color: this.COLOR(), vel: vel})
}

Util.inherits(MovingObject, Asteroid);

module.exports = Asteroid;