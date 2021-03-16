// Function.prototype.inherits = function(parentObject){
//   function Surrogate(){};
//   console.log(this);
//   Surrogate.prototype = parentObject.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
//   console.log(this);
// }

//prototypal inheritance

Function.prototype.inherits = function(parentObject){
  this.prototype = Object.create(parentObject.prototype);
  this.prototype.constructer = this
}

function MovingObject () {
  MovingObject.prototype.fly = function() {
        console.log(`${this.name} zooms to hyperspeed.`)
      }
}

function Ship (name) {
  this.name = name;
  Ship.prototype.shoot = function() {
      console.log(`${this.name} fires the lasers.`)
      }
}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

ship = new Ship("Nostromo")
obj = new MovingObject();

//class inheritance
// class MovingObject {
//   fly () {
//     console.log(`${this.name} zooms to hyperspeed.`)
//   }
// }

// class Ship extends MovingObject {
//   constructor(name){
//     super();
//     this.name = name;
//   }
//   shoot () {
//     console.log(`${this.name} fires the lasers.`)
//   }
// }



// ship = new Ship("Nostromo")
// obj = new MovingObject();


