//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/solutions/javascript

function min(arr, toReturn) {
  var val = Math.min.apply(null, arr)
  return toReturn == 'value' ? val : arr.indexOf(val)
}