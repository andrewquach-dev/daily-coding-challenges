//https://www.codewars.com/kata/585a033e3a36cdc50a00011c/solutions/javascript?filter=me&sort=best_practice

function freqSeq(str, sep) {
  //P: str is string and sep is string

  //R: string thats str but delimted by sep

  //E(3): 
  //freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
  //freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
  //freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

  //P: 
  //turn str into array
  //map into count of how many times it appears in str
  //split it into sep
  //return

  return str.split('').map(e => str.split('').filter(c => c === e).length).join(sep)

}