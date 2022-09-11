//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  console.log(a, " ", b);
  console.log(a.filter((e) => e !== b[0]));
  let temp = a;
  for (let i = 0; i < b.length; i++) {
    temp = temp.filter((e) => e !== b[i]);
  }
  return temp;
}
