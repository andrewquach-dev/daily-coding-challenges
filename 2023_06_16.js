//https://www.codewars.com/kata/537400e773076324ab000262

function groupAnagrams(strs) {
  // P: words is an array of strings
  // R: return an array of arrays, each array are grouped anagrams
  // E: input groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
  //    output [  ["tsar", "star", "tars"],  ["rat", "tar"],  ["cheese"]]
  //P: create an object
  // go through each word of words
  //create an array of size 26 filled with 0
  //

  let map = {};

  for (let str of strs) {
    let arr = Array(26).fill(0);
    for (let ch of str) {
      arr[ch.charCodeAt(0) - 97]++;
    }
    if (arr in map) {
      map[arr].push(str);
    } else {
      map[arr] = [str];
    }
  }
  return Object.values(map);
}
