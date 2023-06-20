//https://www.codewars.com/kata/591d3375e51f4a0940000052/train/javascript

function sumOfThrees(n) {
  const BASE = 3;

  let ternary = n.toString(BASE);

  if (!/^[01]+$/.test(ternary)) return "Impossible";

  return ternary
    .split("")
    .reverse()
    .reduce(
      (sum, term, i) => (term === "1" ? "+" + BASE + "^" + i : "") + sum,
      ""
    )
    .slice(1);
}
