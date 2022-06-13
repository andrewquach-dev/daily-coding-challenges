//https://www.codewars.com/kata/5a61a846cadebf9738000076/solutions/javascript/me/best_practice


function peak(arr) {
  //..
  for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr.slice(0, i) + ' === ?' + arr.slice(i + 1, arr.length));
    if (arr.slice(0, i).reduce((a, e) => a + e, 0) === arr.slice(i + 1, arr.length).reduce((a, e) => a + e, 0)) {
      return i;
    }
  }
  return -1;
}