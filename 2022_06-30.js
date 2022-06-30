//https://www.codewars.com/kata/5168b125faced29f66000005/solutions/javascript?filter=me&sort=best_practice

function solution(fullText, searchText) {
  //P: 2 strings

  //R: integer is number of times searchText is found within fullText

  //E(3): 
  //solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2
  //solution('aaabbbcccc', 'bbb') # should return 1

  //P: 
  //declare count vairable
  //loop fulltest.length - searchText.length
  //every iteration slice i and searchtext.length
  //if the above equals searchtext then increment count
  //return count

  let count = 0;
  for (let i = 0; i < fullText.length - searchText.length + 1; i++) {
    console.log(fullText.slice(i, i + searchText.length) === searchText)
    if (fullText.slice(i, i + searchText.length) === searchText) {
      count++;
    }
  }
  return count;
}