// Task 1

let x = 1;
let y = 2;

let res1 = (x+y) * 4; 

console.log(res1); // "12"

res1 = (x+y) + "1"; 

console.log( typeof res1); // "string"

let z = "true";
let res2 = z + x*y;
console.log(res2); // "true2"
console.log( typeof res2); // "string"


let res3 = x!= y;
console.log(res3); // true
console.log( typeof res3); // " boolean "

let n;
let res4 = x*y*n;
console.log(res4); // NaN
console.log( typeof res4); // "number"

// Task 2


let m = prompt("Please enter the number here:");

let result1 = m > 0 && m % 2 == 0;
let result2 = m % 7 == 0;
console.log(result1);
console.log(result2);



// Task 3

const myArray = [];

myArray[0] = 9;
myArray[1] = "__";
myArray[2] = true;
myArray[3] = null;


console.log(myArray.length);

myArray[4] = prompt(" Please enter a symbol here: ");
console.log(myArray[4]);

myArray.shift();

console.log (myArray);

// Task 4

const cities = [" Rome ", " Lviv ", " Warsaw "]; 

let ribbon = cities.join("*");

console.log(ribbon);

// Task 5

let isAdult = prompt("Please enter your age here:", "Enter your age");

let result = (isAdult >= 18) ? "You have reached the age of majority" : "You are still too young";

alert (result);

// Task 6

let a = parseFloat(prompt("Please enter the first triangle side length:"));
if ( a > 0 ) { console.log(a);
} else {console.log("Incorrect data a")};

let b = parseFloat(prompt("Please enter the second triangle side length:"));
if (b > 0) { console.log(b);
} else {console.log("Incorrect data b");}

let c = parseFloat(prompt("Please enter the third triangle side length:"));
if (c > 0) { console.log(c);
} else {console.log("Incorrect data c")};

let semiP = (a+b+c)/2;

let isRect = (a**2+b**2 == c**2)? true : false;



console.log(isRect);


let area = (isRect == true)? a*b*1/2 : Math.sqrt(semiP * (semiP - a)*(semiP - b)*(semiP - c)) ; 
//if the triangle is rectangular we use a*b*1/2 formula, if not we use Heron formula


console.log(area.toFixed(3));


// Task 7


const currentDate = new Date();

const dateTime = currentDate.getHours();

console.log(dateTime);

if (dateTime > 23 && dateTime <= 5) {alert("Good night");
} else if (dateTime > 5 && dateTime <= 11) {alert("Good morning");
} else if (dateTime > 11 && dateTime <= 17) {alert("Good day");
} else if (dateTime > 17 && dateTime <= 23) {alert("Good evening");
}



switch (true) {
case (dateTime > 23 && dateTime <= 5) : console.log("Good night!"); 
break;
case (dateTime > 5 && dateTime <= 11) : console.log("Good morning!");
break;
case (dateTime > 11 && dateTime <= 17) : console.log("Good day!");
break;
case (dateTime > 17 && dateTime <= 23) : console.log("Good evening!");
break;
default:console.log("Hello!")

}
