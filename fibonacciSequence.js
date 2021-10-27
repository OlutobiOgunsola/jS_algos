var makeFibonacciSequence=function(depth) {

    let fibonacciArray=[];
    
    if(depth<1) {

        return fibonacciArray;

    };

    let iterator = depth;
    let currentValue = 1, previousValue = 0, nextValue = 1;

    while(iterator) {

        console.log(iterator, previousValue, currentValue, nextValue)
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

console.log(makeFibonacciSequence(250));