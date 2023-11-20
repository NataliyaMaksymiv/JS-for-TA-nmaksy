// Task 1

let myArray = [2, 3, 4, 5];

console.log(myArray.length);


for (let i = 0; myArray.length; i++) 
{ console.log(myArray[i]); 
}


while (i < 5) {
    alert ( i );
    i++;
}

// Task 2

let i = 2;
while (i<= 5) {
    if( i % 2 == 0) {
        console.log(i + " is even number");
    }
    else {
        console.log(i + " is odd number");
    }
}


// Task 3

function rankArray(k) {
    
    let randNumbs = [];
    for (let i = 0; i < k; i ++) {
        randNumbs.push(Math.random())
    }
    return randNumbs;
}

// Task 4
let a = parseInt(prompt ("Please enter a:  "));
let b = parseInt(prompt ("Please enter b:   "));
function raiseToDegree (a,b) {
 
    return Math.pow(a,b);
 }
console.log(raiseToDegree());


// Task 5

function findMin() {
    if (args.length === 0) {
      return undefined; 
    }
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < min) {
        min = args[i];
      }
    }
    return min;
  }
  console.log(findMin(12, 14, 4, -4, 0.2));


// Task 6

let arr = [];
function findUnique(arr) {
    for (let i =0; i< arr.length; i++){
        for (let j = i+1; j< arr.length; j++) {
            if (arr[i] === arr[j]){
                return false;
            }
        }
    }
    return true;
}
console.log(findUnique([1,2,3,5,3]));
console.log(findUnique([1,2,3,5,11]));

// Task 7

function lastElem(arr, num = 1) {
    if (num >= arr.length) {
      return arr;
    }
    const result = arr.slice(-num);
    return num === 1 ? result[0] : result;
  }
  
  console.log(lastElem([3, 4, 10, -5])); // Output: -5
  console.log(lastElem([3, 4, 10, -5], 2)); // Output: [10, -5]
  console.log(lastElem([3, 4, 10, -5], 8)); // Output: [3, 4, 10, -5]

// Task 8
function titleCase(str) {
    let splitStr = str.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    return splitStr.join(" ");    
}
console.log(titleCase("i love java script"));
