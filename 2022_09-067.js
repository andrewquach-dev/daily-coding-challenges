//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(
      (e, i, a) =>
        (e = i === a.lastIndexOf(e) && i === a.indexOf(e) ? "(" : ")")
    )
    .join("");
}
