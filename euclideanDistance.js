/**
 * 
 * @param {array} pointA - double element array of coordinates for point A
 * @param {array} pointB - double element array of coordinates for point B
 */

var euclideanDistance = (pointA, pointB) => {
    /** 
     *  The euclidean distance between two points is the straight line distance between them on a 2D plane, 
     *  represented by the hypoteneus of a triangle formed by both points on the plane 
     * 
     *  Get all argument indices with Object.keys(Arg)
     *  Map indices and perform arithmetic operation on each element
     *  Calculate Hypoteneus
     *  Return result
     */

    return Math.hypot(...Object.keys(pointA).map(elem => {
        return pointB[elem] - pointA[elem] // difference of coordinates in 2D Plane
    }))
}

console.log(euclideanDistance([1,1], [4,5]))