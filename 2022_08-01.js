//https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/solutions/javascript?filter=me&sort=best_practice

function nameScore(name) {
  // Insert your brilliant code here
  let obj = {};
  obj[name] = name.split("").reduce((a, l) => {
    for (const [key, value] of Object.entries(alpha)) {
      if (key.includes(l.toUpperCase())) {
        a += value;
      }
    }
    return a;
  }, 0);
  return obj;
}
