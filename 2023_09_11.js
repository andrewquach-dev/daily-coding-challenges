//https://www.codewars.com/kata/55c606e6babfc5b2c500007c

var FilterNumbers = function (str) {
    return str.split('').filter(c => isNaN(c)).join('');
}