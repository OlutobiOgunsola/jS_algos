
function sockMerchant(n, ar) {
    // Write your code here
    
    if(n !== ar.length) {
        // improper input, bail out
        return null;
    }
    
    let sockPile = {};
    let totalPairs = 0;
    
    const assignSock=(sock) => {
        if(sockPile[sock]) {
            // sock has siblings. group together
            sockPile[sock]++
        } else {
            sockPile[sock] = 1;
        }
    }
    
    for(let i = 0; i < ar.length; i++){
        assignSock(ar[i]);   
    }

    var sockPileKeys = Object.keys(sockPile)
    
    for(let elem in sockPileKeys) {
        let pairsTotal=Math.floor(sockPile[sockPileKeys[elem]]/2);
        pairsTotal ? totalPairs=totalPairs+pairsTotal:null;
    }
    
    return totalPairs;
}


console.log(sockMerchant(10, [1, 1 ,3, 1 ,2 ,1, 3 ,3 ,3 ,3]));

