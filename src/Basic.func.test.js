'use strict'
import sum from './Basic.func'

test('adds 1 + 2 to equal 3', () => {
  // const sum = require('./Basic.func')
  expect(sum(1,2)).toBe(3)
})
