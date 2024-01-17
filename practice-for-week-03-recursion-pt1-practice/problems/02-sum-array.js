/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  // Your code here
  if (arr.length === 1) { return arr[0] }
  else { return arr.shift() + sumArray(arr) }

//   if (arr.length === 0) {
//     return 0;
// }

// return arr[0] + sumArray(arr.slice(1));

  // if(!arr) {return null}

  // if (arr.length > 0) {
  //   return arr.shift() + sumArray(arr)
  // }

  // let sumOfArray = 0;
  // for(let i = 0; i < arr.length; i++){
  //   sumArray =+ arr[i]
  // }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}