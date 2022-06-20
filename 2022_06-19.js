//https://www.codewars.com/kata/57efab9acba9daa4d1000b30/solutions/javascript/me/best_practice

function bald(x) {
  let ans = x.split('').filter(ele => ele === '/').length
  let resp = '';
  let arr = [];
  if (ans === 0) {
    resp = 'Clean!'
  } else if (ans === 1) {
    resp = 'Unicorn!'
  } else if (ans === 2) {
    resp = 'Homer!'
  } else if (ans >= 3 && ans <= 5) {
    resp = 'Careless!'
  } else {
    resp = 'Hobo!'
  }
  arr.push(x.split('').map(ele => {
    if (ele === '/') {
      ele = '-'
    }
    return ele;
  }).join(''));

  arr.push(resp);
  return arr;
}