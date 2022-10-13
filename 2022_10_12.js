//https://www.codewars.com/kata/5b7176768adeae9bc9000056/train/javascript

function indexEqualsValue(a) {
  console.log(a);
  return a.find((e, i) => e === i) === undefined
    ? -1
    : a.find((e, i) => e === i);
}
