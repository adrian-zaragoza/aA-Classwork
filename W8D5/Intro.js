// open node -> .load intro.js OR type node intro.js

class Clock {
  constructor() {
    let date = new Date()
    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000); 
    //when you give this._tick to the setTimeout function, because the setTimeout function is a function given by the window (running on chrome) or global object (running in node), the "this" keyword will refer to the window/global object, NOT the Clock class. When the window attempts to call this.printTime, printTime is not available on the window, so it will error.

    /*
    Step 1:
    take a function called this._tick

    Step 2: 
    use .bind(this) to set the context to the clock class.
    if you were to print the type of this._tick.bind(this)
    it would be a function.

    Step 3: 
    If you need to invoke that function, you add parens and arguments inside those parens if it takes args:
    this._tick.bind(this)(arg1, arg2) OR
    this._tick.bind(this)(... arg2)

    NOTE: you do NOT invoke the function on line 10 because setTimeout needs to receive a function as its first argument, NOT whatever the function returns.
    */
    
  }

  printTime() {
    let hourString = this.hour.toString();
    let minuteString = this.minutes.toString();
    let secondString = this.seconds.toString();
    if (hourString.length < 2) {
      hourString = "0" + hourString;
    }
    if (minuteString.length < 2) {
      minuteString = "0" + minuteString;
    }
    if (secondString.length < 2) {
      secondString = "0" + secondString;
    }
    console.log(`${hourString}:${minuteString}:${secondString}`);
  }

  _tick() {
    this.seconds++;
    console.log(this);
    this.printTime();
    
  }
}

const clock = new Clock();