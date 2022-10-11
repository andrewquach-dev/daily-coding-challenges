//https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

function kebabize(str) {
  return str
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/[0-9]/g, "")
    .replace(/^-/, "");
}
