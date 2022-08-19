//https://www.codewars.com/kata/57d165ad95497ea150000020/train/javascript

function bears(x, s) {
  let arr = s.match(/(8B)|(B8)/g) || [];
  return [arr.join(""), arr.length >= x];
}
