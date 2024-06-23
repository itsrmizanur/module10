// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum ( a, b ) {
    return a+b;
}

console.log("1. Sum is: " + calculateSum(2, 4));


// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven ( n ) {
    if( n % 2 == 0 ) {
        return true;
    }
    else {
        return false;
    }
}

console.log("2. isEven: " + isEven(55));


// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

const arr = [22,44,21,3,65,76,23,99,64,34,11,6,8,34];
function findMax (a) {
    let max = a[0];

    for(let i = 1; i < a.length; i++) {
        if(a[i] > max) {
            max = a[i];
        }
    }
    return max;
}
console.log("3. Max number of array: " + findMax(arr));


// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.


const str = "abc def ghi jkl";
function reverseString (s) {
    revStr = "";
    for(let i = s.length - 1; i >= 0; i--) {
        revStr = revStr + s[i];
    }
    return revStr;
}

console.log("4. ReverseString: " + reverseString(str));