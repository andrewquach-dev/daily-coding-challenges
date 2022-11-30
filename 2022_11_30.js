//https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

function automorphic(n) {
  //your code here
  let s = Math.pow(n, 2)
  return n.toString() === s.toString().slice(-(n.toString().length)) ? "Automorphic" : "Not!!"
}