/**
 * 
 * @param {int} depth - Depth of the fibonacci sequence to be generated
 * @returns {Structure array} - Returns an array of fibonacci numbers up to specified depth
 */

var makeFibonacciSequence = function(depth) {

    let fibonacciArray = [0,1];
    
    if(depth < 1) {

        return [];

    };

    // Our fibonacci sequence starts with two elements preset, so we will generate a depth two elements less than specified
    let iterator = depth - 2;
    let currentValue = 1, previousValue = 0, nextValue = 1;

    while(iterator) {

        /** ALGORITHM STEPS
         *  This solution uses three values. A current, previous and next
         *  The current value in the iteration should be the last 'next' value generated;
         *  The previous value in the iteration should be the last 'current' value used;
         *  First compute the next number in the sequence and push into array
         *  Set the current value the new 'previous' value, as the previous value has been used already
         *  Set the next value now as the 'current' value, as the current value has also been used already
         *  Repeat iteration
         */

        let currFibonacciArray = [...fibonacciArray];
        nextValue = currentValue + previousValue;
        currFibonacciArray.push(nextValue);
        fibonacciArray = currFibonacciArray;
        currFibonacciArray = null;
        previousValue = currentValue;
        currentValue = nextValue;
        
        iterator--;

    }

    return fibonacciArray;

}

console.log(makeFibonacciSequence(12));