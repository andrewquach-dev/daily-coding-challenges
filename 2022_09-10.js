//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

function last(x) {
  return x.split(" ").includes("")
    ? x.split(" ")
    : x
        .split(" ")
        .sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
}
