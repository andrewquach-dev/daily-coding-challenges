//https://www.codewars.com/kata/580a41b6d6df740d6100030c/solutions/javascript?filter=me&sort=best_practice

function alan(x) {
  let stops = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
  return stops.every(stop => x.includes(stop)) ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';
}