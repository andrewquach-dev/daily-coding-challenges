//https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript

function absentVowel(x) {
  let i = null;
  if (!x.toLowerCase().split("").includes("o")) {
    i = 3;
  } else if (!x.toLowerCase().split("").includes("a")) {
    i = 0;
  } else if (!x.toLowerCase().split("").includes("e")) {
    i = 1;
  } else if (!x.toLowerCase().split("").includes("i")) {
    i = 2;
  } else if (!x.toLowerCase().split("").includes("u")) {
    i = 4;
  }
  return i;
}
