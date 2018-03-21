// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here
let count = 0;
const countToTen = () => {
  if (count < 10) {
    console.log('Counting', ++count);
    countToTen();
  }
}

// when you code is ready, un-comment the next line and run the file
console.log(countToTen());
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));

// write the above function in a recursive way.
const recursiveFactorial = (n) => {
  if (n == 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(5));
