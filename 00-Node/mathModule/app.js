var math = require('./mathlib')();     //notice the extra invocation parentheses!
console.log(math);


math.add(2,3);  // 5
math.multiply(3,5) // 15
math.square(5) // 25
math.random(1,35) // Random # between 1 and 35

console.log("");

math.add(15,10);  // 25
math.multiply(7,7) // 49
math.square(3) // 9
math.random(1,5) // Random # between 1 and 5