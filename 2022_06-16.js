//https://www.codewars.com/kata/57ced2c1c6fdc22123000316/solutions/javascript/me/best_practice

function numObj(s) {
  return s.map(num => {
    let n = num.toString();
    num = {};
    num[n] = String.fromCharCode(n);
    return num;
  })
}