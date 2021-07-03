import {add, subtract, multiply, divide} from '../src/math'

test('that the add function works', () => {
  expect(add(1, 1)).toBe(2)
})

test('that the subtract function works', () => {
  expect(subtract(1, 1)).toBe(0)
})

test('that the multiply function works', () => {
  expect(multiply(1, 1)).toBe(1)
})

test('that the divide function works', () => {
  expect(divide(1, 1)).toBe(1)
})
