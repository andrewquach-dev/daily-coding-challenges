//https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

function vowelIndices(word) {
  //your code here
  let vowels = 'aieouy';
  let ans = []
  console.log(word)
  word.split('').forEach((l, i) => {
    if (vowels.includes(l.toLowerCase())) {
      ans.push(i + 1)
    }
  })
  return ans;
}