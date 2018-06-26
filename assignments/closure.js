// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====

  // Return a function that when invoked increments and returns a counter variable.
        

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
          let param = 0;

          function increment () {
            return ++param;
          }

          function decrement (){
           return --param;

          }

};
let count = 8;    
let test = counterFactory();

    console.log(test.increment);
