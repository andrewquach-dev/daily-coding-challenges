//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {
  return words
    .split(" ")
    .sort(
      (a, b) =>
        Number(a.split("").filter((e) => !isNaN(e))) -
        Number(b.split("").filter((e) => !isNaN(e)))
    )
    .join(" ");
}
