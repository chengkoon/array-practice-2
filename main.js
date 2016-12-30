// importing our helper method, helper.test()
var helper = require('./test-helper-functions')

// Write your own tests and then write code to pass the tests!
// helper.test(myFunc(intput), expectedOutput)

// QUESTION ONE - remove a specific element from an array

function removeArrayElement (inputArray, integerToBeRemoved) {
  return inputArray.filter(function(elem) {
    return elem !== integerToBeRemoved;
  })
}

helper.test(removeArrayElement([1,2,4,6,3,4],4), [1,2,6,3]);

// Question 2 - get nth largest element from an unsorted array

function nthLargest (inputArray, nthLargestInteger) {
  inputArray.sort(function(a,b) {
    return a-b;
  }) // sorted from smallest to largest
  var index = nthLargestInteger;
  return inputArray[index];
}

helper.test(nthLargest([43,56,23,89,88,90,99,652],4), 89);

// Question 3 - get a random item from an array

var random = function (min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function randomItem (arrayOfStrings) {
  return arrayOfStrings[random(0,arrayOfStrings.length-1)];
}

// helper.test(randomItem(['hello', 'hi', 'bye'])) - not possible to have a test that is helpful in this case..

// Question 4 - generate an array of specified length, filled with integer
//numbers, increase by a specific step from starting position

function arrayRange(initial, length, increment) {
  var resultArr = [initial];
  for (var i=1; i<length; i++) {
    resultArr.push(initial+increment);
    initial = resultArr[resultArr.length-1];
  }
  return resultArr;
}

helper.test(arrayRange(1, 4, 1), [1, 2, 3, 4]);



















//
