//https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript

function password(str) {
    return str.length >= 8 && /\d/.test(str) && /[a-z]/.test(str) && /[A-Z]/.test(str)
  }