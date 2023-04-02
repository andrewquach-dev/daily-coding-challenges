//https://www.codewars.com/kata/5bb3e299484fcd5dbb002912/train/javascript

function pyramid(balls) {
    return Math.floor((Math.sqrt(balls * 8 + 1) - 1) / 2);
}