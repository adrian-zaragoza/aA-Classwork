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
    if (this.seconds === 60){
      this.seconds = 0;
      this.minutes++;
    }
    if(this.minutes === 60){
      this.minutes = 0;
      this.hour++;
    }
    if(this.hour === 24){
      this.hour = 0;
    }
    this.printTime();
    
  }
}

// const clock = new Clock();


// addNumbers

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("Prompt", function(numString1){  //reader.question prompts the user in terminal, numString1 gets declared under the hood
    sum += parseInt(numString1); // add numString1 convert to int.
    numsLeft--;
    console.log(sum);
    addNumbers(sum, numsLeft, completionCallback);
    });
  }
  else if(numsLeft === 0){
    completionCallback(sum); //dont need to bind because we are not using this. we could pass in numsLeft to callback.
  }
}

// function completionCallback(sum){ //only function is to close the reader and print out Done
//   reader.close(); //make sure to close the reader
//   console.log("")
// }


// ***** BUBBLE SORT (absurd) ********

addNumbers(0, 3, sum => {
  console.log(`Total Sum: ${sum}`);
   reader.close()
  });

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question("Compare two elements: type 'yes' or 'no':", )
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});