var count = 0;

var binarySearch = function(array, data, counter) {
    /**
     *  Sort the array
     *  Jump to middle, if data < middle, discard upper limit, else discard lower limit
     */

    let sortedArray = [...array].sort((a,b)=>{
        return a - b;
    });
    let arrayLength = sortedArray.length;
    counter++;
    if(sortedArray[Math.floor(arrayLength/2)] < data) {
        // discard lower array as data is in upper limit
        return binarySearch(sortedArray.slice(Math.floor(arrayLength/2), arrayLength), data, counter);
    } else if(sortedArray[Math.floor(arrayLength/2)] > data) {
        // discard lower array as data is in upper limit
        return binarySearch(sortedArray.slice(0, Math.floor(arrayLength/2)), data, counter);
    } else if(sortedArray[Math.floor(arrayLength/2)] === data) {
        console.log(`Found in ${counter} iterations`)
        return data;
    } else {
        return null;
    }
}

let searchMe = [0,10,2,4,3,693,68,285,82,56,1,6,3,78,15,26,5,15,57,02,17,46,27,26,46,26,14,19,92,38,117,31,12]

console.log(binarySearch(searchMe, 285, count));