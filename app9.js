// Task 1
function getPromise (message, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(message), delay))
}

getPromise('test promise', 2000).then((data) => console.log(data))

// Task 2
function calcArrProduct (arr) {
  return new Promise((resolve, reject) => {
    const isNumber = arr.every(el => !isNaN(el))

    if (isNumber) resolve(arr.reduce((res, current) => res * current, 1))
    else reject(new Error('Error! Incorrect array!'))
  })
}

calcArrProduct([3, 4, 5]).then(result => console.log(result))
calcArrProduct([5, 'user2', 7, 12]).then(result => console.log(result)).catch(err => console.error(err))

// Task 3
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time))
const getInterval = () => Math.floor((Math.random() * 3000))

function showNumbers () {
  let currentPromise = delay(0, getInterval())

  for (let number = 1; number <= 10; number++) {
    currentPromise = currentPromise.then(resolvedNUmber => {
      console.log(resolvedNUmber)
      return delay(number, getInterval())
    })
  }
}
showNumbers()

// Task 4
const newDelay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time))
const newGetInterval = () => Math.floor((Math.random() * 3000))

async function newShowNumbers() {
  for (let number = 0; number < 10; number++) {
    await newDelay(number, newGetInterval()).then((result) => console.log(result))
  }
}

newShowNumbers()