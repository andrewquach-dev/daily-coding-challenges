//https://www.codewars.com/kata/609eee71109f860006c377d1/solutions/javascript/me/best_practice

function lastSurvivor(letters, coords) {
  let temp = letters.split('');
  while (coords.length !== 0) {
    temp.splice(coords[0], 1);
    coords.shift();
  }
  return temp.join('');
}