// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript?filter=me&sort=best_practice&invalids=false
function likes(names) {
  // TODO
  let s = " like this";
  if (names.length === 0) {
    s = "no one likes this";
  } else if (names.length === 1) {
    s = names[0] + " likes this";
  } else if (names.length === 2) {
    s = names.join(" and ") + s;
  } else if (names.length === 3) {
    s = names[0] + ", " + names.slice(1, 3).join(" and ") + s;
  } else {
    s =
      names[0] +
      ", " +
      names[1] +
      ` and ${names.slice(1, names.length - 1).length} others` +
      s;
  }
  return s;
}
