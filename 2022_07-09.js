//https://www.codewars.com/kata/5768a693a3205e1cc100071f/solutions/javascript?filter=me&sort=best_practice

function initializeNames(name) {
  // Insert your brilliant code here
  let s = name.split(' ');
  return s.length > 2 ? s.map((e, i) => i === 0 || i === s.length - 1 ? e : e = e[0] + '.').join(' ') : name;

}