//https://www.codewars.com/kata/569512b7707bc1b88200002f

var cache = { 1: 1, 2: 1 }

const fibonacci = n => cache[n] || (cache[n] = fibonacci(n - 1) + fibonacci(n - 2))