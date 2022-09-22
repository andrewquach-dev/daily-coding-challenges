// Given a string of words or phrases, count the number of vowels.

// No Regex! Unless that is your brute force...

function countVowels(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  vowels.forEach((v) => {
    if (string.includes(v)) {
      count++;
    }
  });

  return count;
}

console.log(countVowels("andrew") == 2);
console.log(countVowels("apples") == 2);
console.log(countVowels("oranges") == 3);
