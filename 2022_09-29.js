let numJewelsInStone = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStone("aA", "aAAbbbb") === 3);
console.log(numJewelsInStone("z", "ZZ") === 0);
