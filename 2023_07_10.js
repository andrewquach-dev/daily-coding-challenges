//https://www.codewars.com/kata/573992c724fc289553000e95/train/javascript

function smallest(n) {
  let arr = n.toString().split("");
  const copy = n.toString().split("");
  return arr.reduce(
    (acc, el, i) => {
      for (let j = 0; j < arr.length; j++) {
        arr = [...copy];
        arr.splice(i, 1);
        arr.splice(j, 0, el);
        if (+arr.join("") < acc[0]) acc = [+arr.join(""), i, j];
      }
      return acc;
    },
    [n, 0, 0]
  );
}
