const fibonacci = function(n) {
    let index = parseInt(n);

    if(index < 0){
        return "OOPS";
    }

    if(index === 1 || index === 2){
        return 1;

    }else if(index === 0){
        return 0;
    }

    let firstPrevious = 1;
    let secondPrevious = 0;
    let currentIndex = 0;
    for(let i = 2; i <= index; i++){
        currentIndex = firstPrevious + secondPrevious;
        secondPrevious = firstPrevious;
        firstPrevious = currentIndex;
    }

    return currentIndex;

};

//console.log(fibonacci(5));

// Do not edit below this line
module.exports = fibonacci;
