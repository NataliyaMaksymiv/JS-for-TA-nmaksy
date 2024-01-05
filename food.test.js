const { test, expect } = require('@jest/globals');
const { sortFood } = require('./food');

const food = [
  { kind: 'pepper', price: 27 },
  { kind: 'apple', price: 15 },
  { kind: 'banana', price: 20 },
  { kind: 'potato', price: 10},
  { kind: 'bread', price: 16},
    
];
const min = 12;
const max = 40;

test('Test whether the expected length of the sorted array corresponds to the actual length', () => {
  const sortedFood = sortFood(food, min, max);
  expect(sortedFood.length).toBe(3);
});

test('Test whether the sorted array contains the object { kind: \'pepper\', price: 27 }', () => {
  const sortedFood = sortFood(food, min, max);
  expect(sortedFood).toContainEqual({ kind: 'pepper', price: 27 });
});

test('Test whether the sorted array contains 2, 3, and 4 elements of the original food array', () => {
  const sortedFood = sortFood(food, min, max);
  expect(sortedFood).toContain(food[1], food[2], food[3]);
});

test('Test whether the price property of the 1st element of the sorted array is greater than min', () => {
  const sortedFood = sortFood(food, min, max);
  expect(sortedFood[0].price).toBeGreaterThan(min);
});

test('Test whether the price property of the 3rd element of the sorted array is less than max', () => {
  const sortedFood = sortFood(food, min, max);
  expect(sortedFood[2].price).toBeLessThan(max);
});

test('Test the assertion that the sorted array does not contain the element { kind: \'lemon\', price: 50 }', () => {
  const sortedFood = sortFood(food, min, max);
  expect(sortedFood).not.toContainEqual({ kind: 'lemon', price: 50 });
});