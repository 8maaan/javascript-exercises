const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0 || typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    }
     
    //Swap start and end if end > start
    if (start > end){
        let temp = end;
        end = start;
        start = temp; 
    }
    
    // Calculate the sum of integers in the range
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
