//https://www.codewars.com/kata/59727e04f6a02d0cde00001a/train/javascript

function sortLetters(a) {
  let arr = [].concat(...a).filter((v) => typeof v === "string")
    .join`/`.toUpperCase().split`/`;
  return [
    arr.filter((v) => /[AEUIO]/.test(v)),
    arr.filter((v) => /[^AEUIO]/.test(v)),
  ];
}
