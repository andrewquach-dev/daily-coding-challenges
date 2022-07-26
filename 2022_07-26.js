//https://www.codewars.com/kata/57de78848a8b8df8f10005b1/solutions/javascript

function howMuchCoffee(events) {
  var coffeeCount = 0;
  events.forEach(function (entry) {
    var matches = /^((cw|cat|dog|movie)|(CW|CAT|DOG|MOVIE))$/.exec(entry);
    coffeeCount += matches ? (matches[2] ? 1 : matches[3] ? 2 : 0) : 0;
  });
  return coffeeCount > 3 ? "You need extra sleep" : coffeeCount;
}
