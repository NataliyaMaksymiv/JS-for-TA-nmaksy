// Task 1
function calcRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error('Must be a number')
  } else if (width <= 0 || height <= 0) {
    throw new Error('Must be a positive number')
  } 
  else { 
    return width * height
  }
}

try {
  let width = +prompt('Please enter width:')
  let height = +prompt('Please enter height:')
  
  let area = calcRectangleArea(width, height)
  alert(`Area is ${area}`)
} catch (exception) {
  alert (exception)
}

// Task 2
function checkAge() {
  let age = prompt('Please enter your age here:')

  if (age === '') {
    throw new Error('The field is empty. Please enter your age')
  } else if (isNaN(+age)) {
    throw new Error('It is not a numeric value')
  } else if (+age < 14) {
    throw new Error('The age is less than 14 years')
  } else {
    alert ('Access allowed')
  }
}

try {
  checkAge()
} catch (exception) {
  alert(`${exception.name}: ${exception.message}`);
}

// Task 3
class MonthException extends Error{
  constructor(message) {
    super(message)
    this.message = message
    this.name = 'MonthException'
  }

  get message() {
    return { exceptionName: this.name, exceptionMessage: this.message }
  }

  set message(message) {
    this.message = message
  }
}

function showMonthName(monthNumber) {
  const date = new Date()
  const options = { month: 'long' }

  if (isNaN(monthNumber)) {
    throw new MonthException('Not a number')
  } else if (monthNumber > 12 || monthNumber < 1) {
    throw new MonthException('Incorrect month number. Valid numbers are 1 - 12')
  } else {
    date.setMonth(monthNumber - 1)
    return date.toLocaleDateString('en-us', options)
  } 
}

let month = +prompt('Enter a month number:')

try {
  console.log(showMonthName(month))
} catch (exception) {
  alert(`${exception.name}: ${exception.message}`)
}

// Task 4
function showUser (id) {
  if (id < 0) {
    throw Error(`ID must not be negative: ${id}`)
  } else {
    return { id: id }
  }
}

function showUsers (ids) {
  let idObjects = ids.map(function(id) {
    return showUser(id)
  })
  return idObjects
}

try {
  showUsers([7, -12, 44, 22])
} catch (exception) {
  alert(exception)
}

console.log(showUsers([7, 44, 22]));
