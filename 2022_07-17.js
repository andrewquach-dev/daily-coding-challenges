//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/solutions/javascript?filter=me&sort=best_practice

function loopArr(arr, direction, steps) {
  for (let i = 0; i < steps; i++) {
    if (direction === "left") {
      let temp = arr.shift();
      arr.push(temp);
    } else if (direction === "right") {
      let temp = arr.pop();
      arr.unshift(temp);
    }
  }
  return arr;
}
