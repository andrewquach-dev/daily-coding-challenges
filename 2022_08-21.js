//https://www.codewars.com/kata/581331293788bc1702001fa6/solutions/javascript

function mirror(text) {
  let stars = Math.max(...text.split` `.map((v) => v.length)) + 4;
  let space = Math.max(...text.split` `.map((v) => v.length));
  let arr = text.split` `.map(
    (v) =>
      "\n* " +
      v.split(``).reverse().join`` +
      " ".repeat(space - v.length) +
      " *\n"
  ).join``.replace(/\*\n\n\*/g, "*\n*");
  return "*".repeat(stars) + arr + "*".repeat(stars);
}
