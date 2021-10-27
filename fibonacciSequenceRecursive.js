/**
 * 
 * @param {int} depth - Depth of the fibonacci sequence to be generated
 * @returns {Structure array} - Returns an array of fibonacci numbers up to specified depth
 */


let fibonacciArray=[];

var makeFibonacciSequenceRecursive=function(depth) {

    let currentArray = [0, 1]; //base array

    if(depth<1) {

        return [];

    }

    if(depth===1) {

        return currentArray;

    }

    currentArray = makeFibonacciSequenceRecursive(depth-1);

    return [...currentArray, currentArray[currentArray.length-1] + currentArray[currentArray.length-2] ]; // spread the current array, and add the last 2 elements together

};

console.log(makeFibonacciSequenceRecursive(25));