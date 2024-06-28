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

const arr = [22, 44, 21, 3, 65, 67, 93, 35, 76,23, 99, 64, 34, 11, 6, 8, 34];
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

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers ( a ) {
    let oddNumbers = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 1) {
            oddNumbers.push(a[i]);
        }
    }
    return oddNumbers;
} 
console.log("5. Odd Numbers: " +  filterOddNumbers( arr));


// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray ( a ) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    return sum;
}
console.log("6. Sum: " + sumArray(arr));

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray ( a ) {
    let i, j;
    for(i = 0; i < a.length; i++) {
        for(j = 0; j < a.length; j++) {
            if(a[i] < a[j]) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    return a;
}

console.log("7. Sorted array: " + sortArray(arr));


// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

function capitalizeFirstLetter ( str ) {
    let char = str[0];
    if(char >= 'a' && char <= 'z') {
        char = char.toUpperCase();
    }
    for(let i = 1; i < str.length; i++) {
        char = char + str[i];
    }

    return char;
}

console.log("8. 1st letter uppercase: " + capitalizeFirstLetter("hello"));