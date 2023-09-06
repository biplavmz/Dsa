// Q1. Maximum and minimum of an array using minimum number of comparisons

let arr = [3, 5, 4, 1, 9];
let numbers = function (arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return "max is " + max + " min is " + min;
};
console.log(numbers(arr));

// Q2 Write a program to reverse an array or string

let arr2 = [1, 2, 3, 4, 5, 6];

console.log(arr2.reverse());

// Q3 Maximum-Subarray [Kadane's Algorithm | Largest Sum Contiguous Subarray]

let arr3 = [5, -4, -2, 6, 1];

let maxsum = 0;
let currentsum = 0;

function m1(arr) {
  for (let i = 0; i < arr.length; i++) {
    currentsum += arr[i];
    maxsum = Math.max(maxsum, currentsum);

    if (currentsum < 0) {
      currentsum = 0;
    }
  }
  return maxsum;
}

console.log(m1(arr));


// merge sort 



