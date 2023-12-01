//Task 1
// Variant 1
document.getElementById("test").innerHTML = "Last";

//  Variant 2
let newDoc = document.body.children[0];
    newDoc.outerHTML = "Last";

// Task 2

let newImage = document.querySelector('.image');
newImage.setAttribute('src', 'cat.jpg');
alert(newImage.outerHTML);

// Task 3

const value = document.querySelectorAll('#text p');
value.forEach((paragraph, index) => { 
    console.log('Selector text ${index}: ${paragraph.textContent}');
})

// Task 4
//Variant 1
const listFull = document.getElementById('list');
const listArray = Array.from(listFull.children).filter(item => item.tagName == 'LI')
alert(listArray[0].textContent + listArray[4].textContent + listArray[1].textContent + listArray[3].textContent + listArray[2].textContent);

// Variant 2
const fullList = document.getElementById('list');
const anotherArray = fullList.getElementsByTagName('li');

Array.from(anotherArray).forEach((item, index) => {alert(`${item.textContent}`);})

// Task 5

let one = document.querySelector('h1');
one.style.fontSize = "30px";
one.style.backgroundColor = "#00ff00";

document.getElementById("myDiv").children[0].innerHTML = "<b>First paragraph</b>";
let two = document.getElementById("myDiv").children[1];
two.style.color = "red";
let three = document.getElementById("myDiv").children[2];
three.style.textDecoration = "underline";
document.getElementById("myDiv").children[3].innerHTML = "<i>Fourth paragraph</i> ";
document.getElementById('myList').style.display = 'flex';
document.getElementsByTagName('span')[0].style.display = 'none';

// Task 6
 let firstMessage = prompt("Enter message one here:");
document.getElementById('input1').value = firstMessage;

 let secondMessage = prompt("Enter message two here:");
 document.getElementById('input2').value = secondMessage;

 temp = document.getElementById('input1').value = firstMessage;
 document.getElementById('input1').value = firstMessage = document.getElementById('input2').value = secondMessage;
 document.getElementById('input2').value = secondMessage = temp;

 // Task 7

let body = document.getElementsByTagName('body')[0];
let mainElement = document.createElement('main');
mainElement.className = 'mainClass check item';

let divElement = document.createElement('div');
divElement.id = 'myDiv';

let paragraphElement = document.createElement('p');
paragraphElement.textContent = 'First paragraph';

divElement.appendChild(paragraphElement);
mainElement.appendChild(divElement);
document.body.appendChild(mainElement);
