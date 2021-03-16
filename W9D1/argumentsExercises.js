// function sum(){
//   let total = 0;
//   for(let i = 0; i < arguments.length; i++){
//     total += arguments[i];
//   }
//   return total;
// }

function sum(){
  let total = 0;
  array = [...arguments]
  array.forEach( (ele) =>{
    total += ele;
  });
  return total;
}

// Function.prototype.myBind = function(context){
//   let that = this;
//   let args = [...arguments].slice(1) //bind args- args being passed in to myBind
//   return function() {
//     let args2 = [...arguments] //call args
//     let totalArgs = args.concat(args2)
//     that.apply(context, totalArgs);
//   }
// };


// Function.prototype.myBind = function(context, ...bindArgs){
//   return (...callArgs) => this.apply(context, bindArgs.concat(callArgs))
// };

Function.prototype.myBind = function (context, ...bindArgs) {
  let that = this;
  return function(...callArgs){
    that.apply(context, bindArgs.concat(callArgs));
  }
};



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true



// function curriedSum(numArgs){
//   // debugger
//   let numbers = [];
//   function _curriedSum(num){
//     numbers.push(num);
//     if(numbers.length === numArgs){
//       console.log(numbers.reduce((acc, el) => {
//         return acc + el;
//       })); 
//     } else {
//         return _curriedSum;
//       };
//   }
//   return _curriedSum;
// }
// const total = curriedSum(4);
// total(5)(30)(20)(1); // => 56


Function.prototype.curry = function(numArgs){
  let numbers = [];
  let that = this;
  function _curriedFunc(num){
    numbers.push(num);
    if(numbers.length === numArgs){
      return that(...numbers);
    } else {
      return _curriedFunc;
    };
  }
  return _curriedFunc;
}
  let total = function(){}
  total = total.curry(4)
