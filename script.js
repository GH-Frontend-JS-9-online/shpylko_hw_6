'use strict';

// Task_1 "Find in array: sum, min and max, replace min and max - create custom functions"
let arr = [-43, 15, -41, -5, 52, 1, 77, 32, -5];

function sum(arr) {
    let arrLen = arr.length,
        result = 0;
    for (let i = 0; i < arrLen; i++) {
        result += arr[i];
    }
    return result;
}

function getMin(arr) {
    let arrLen = arr.length,
        minEl = arr[0];
    for (let i = 0; i < arrLen; i++) {
        if (minEl > arr[i]) {
        minEl = arr[i];
      }
    }
    return minEl;
}

function getMax(arr) {
    let arrLen = arr.length,
        maxEl = arr[0];
    for (let i = 0; i < arrLen; i++) {
        if (maxEl < arr[i]) {
        maxEl = arr[i];
      }
    }
    return maxEl;
}

function swapMinWithMax(arr) {
    let arrLen = arr.length,
        resultMin = arr[0],
        resultMax = arr[0],
        indexMin = 0,
        indexMax = 0;
    for (let i = 0; i < arrLen; i++) {
      if (resultMin > arr[i]) {
        resultMin = arr[i];
        indexMin = i;
      }
      else if (resultMax < arr[i]) {
        resultMax = arr[i];
        indexMax = i;
      }
  }
    arr[indexMin] = resultMax;
    arr[indexMax] = resultMin;
    return arr;
}


let fSum = sum(arr);
let fMin = getMin(arr);
let fMax = getMax(arr);
let fSwap = swapMinWithMax(arr);

console.log("SUM of items in array equal: " + fSum);
console.log("MIN number in array equal: " + fMin);
console.log("MAX number in array equal: " + fMax);
console.log("Replace min and max items: " + fSwap); 


// Task_2 "Create function which will return function with callback in arguments"
function learnJS(lang, callback) {
    console.log("I learn " + lang);
    callback();
}
function done() {
    console.log("I've done task number two");
}
learnJS("JavaScript", done); 


// Task_3 "Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params."
function foobar() {
    let range = 100,
        firstNumber = 3,
        secondNumber = 7;
    for (let i = 1; i <= range; i++) {
        if (i % firstNumber === 0 && i % secondNumber === 0){
            console.log("foobar");
        } else if (i % secondNumber === 0) {
            console.log("bar");
        } else if (i % firstNumber === 0) {
            console.log("foo");
        } else {
            console.log(i);
        }
    }
}
foobar();